import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar';
import Section from '../../../styles/Section';
import "firebase/compat/firestore";
import firebase from "firebase/compat/app"

const Category = () => {
    const [budgetGoal, setBudgetGoal] = useState();
    const [expenses, setExpenses] = useState([]);
    const user = firebase.auth().currentUser;

    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    const progress = (totalExpenses / budgetGoal) * 100;

    const addExpense = (name, amount, budgetGoal) => {
        const newExpense = { name, amount };
        
        // Check if budgetGoal is a valid number before adding it to newExpense
        if (!isNaN(budgetGoal)) {
            newExpense.budgetGoal = parseFloat(budgetGoal);
        }
    
        setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    
        // Check if budgetGoal is a valid number before saving to Firestore
        if (!isNaN(budgetGoal)) {
            firebase.firestore().collection('expenses').add(newExpense)
                .then(() => {
                    console.log('Expense added to Firestore');
                })
                .catch((error) => {
                    console.error('Error adding expense to Firestore:', error);
                });
        } else {
            console.error('Invalid budgetGoal value. Expense not saved to Firestore.');
        }
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Fetch expenses from Firestore
                const expensesCollection = firebase.firestore().collection('expenses');
    
                // Subscribe to real-time updates
                const unsubscribe = expensesCollection.onSnapshot(snapshot => {
                    const expensesData = snapshot.docs.map(doc => doc.data());
    
                    // Calculate the total budget goal from all expenses
                    const totalBudgetGoal = expensesData.reduce((total, expense) => total + expense.budgetGoal, 0);
    
                    setExpenses(expensesData);
                    setBudgetGoal(totalBudgetGoal);
                });
    
                // Clean up the subscription when the component unmounts
                return () => unsubscribe();
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchUserData();
    }, [user]);

    return (
        <div>
            <Sidebar />
            <Section>
                <div className="title">
                    <h1 className="text-center text-4xl mt-10">
                        <span className="italic">Budget Tracker</span>
                    </h1>
                    <div className="line bg-white mt-4 w-full">
                        <hr />
                    </div>
                </div>
            </Section>
            <div className="p-4 ml-96 bg-white rounded-lg shadow-lg">
                <div className="mb-6">
                    <p className="text-gray-600">Budget Goal: ${budgetGoal}</p>
                    <div className="relative pt-2">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold inline-block">{Math.min(progress, 100).toFixed(2)}%</span>
                            <span className="text-xs font-semibold inline-block">{totalExpenses.toFixed(2)} / ${budgetGoal}</span>
                        </div>
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                            <div style={{ width: `${Math.min(progress, 100)}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <h3 className="text-md font-semibold mb-2">Add Expense and Budget Goal</h3>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const nameInput = e.target.name.value;
                        const amountInput = parseFloat(e.target.amount.value);
                        const budgetInput = parseFloat(e.target.budget.value); 

                        addExpense(nameInput, amountInput, budgetInput); 
                        e.target.reset();
                    }}>
                        <input type="text" name="name" placeholder="Expense name" className="w-52 p-2 border rounded-md" required />
                        <input type="number" name="amount" placeholder="Amount" className="ml-2 w-52 p-2 border rounded-md" required />
                        <input type="number" name="budget" placeholder="Enter budget Goal" className="w-52 p-2 border rounded-md ml-2" />
                        <button type="submit" className="ml-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Add</button>
                    </form>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-2">Expenses</h3>
                    <ul className="list-disc ml-6">
                        {expenses.map((expense, index) => (
                            <li key={index}>{expense.name}: ${expense.amount}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Category;
