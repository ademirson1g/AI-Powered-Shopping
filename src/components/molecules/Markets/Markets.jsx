import React, { useState } from "react";

import withAuth from "../../hoc/withAuth";
import Sidebar from "../Dashboard/Sidebar";
import MarketSection from "../../../styles/MarketSection";
import MarketCard from "./MarketCard";
import TransparentButton from "../../atoms/TransparentButton";

const Markets = (props) => {
  const { user } = props;
  const [pdfUrl, setPdfUrl] = useState(null);

  const generateAndOpenPdf = () => {
    fetch("http://127.0.0.1:5000/generate_pdf", {
      method: "GET",
    })
      .then(response => {
        if (response.ok) {
          return response.blob(); // Get the PDF as a Blob
        } else {
          throw new Error("Failed to fetch PDF");
        }
      })
      .then(pdfBlob => {
        const pdfBlobUrl = URL.createObjectURL(pdfBlob);
        setPdfUrl(pdfBlobUrl);

        // Open PDF in a new tab
        window.open(pdfBlobUrl, "_blank");

        // Download PDF
        const a = document.createElement("a");
        a.href = pdfBlobUrl;
        a.target = "_blank";
        a.download = "daily_catalogue.pdf";
        a.click();
      })
      .catch(error => {
        console.error("Error generating and opening PDF:", error);
      });
  };

  return (
    <div>
      {user && (
        <div>
          <Sidebar />
          <MarketSection>
            <div className="title">
              <h1 className="text-center text-4xl mt-10">
                <span className="italic">Markets</span>
              </h1>
              <div className="line bg-white mt-4 w-full">
                <hr />
              </div>
              <div className="text-center mt-4">
              <TransparentButton onClick={generateAndOpenPdf}>
                  Daily Catalogue
                </TransparentButton>
              </div>
            </div>
            <MarketCard />
          </MarketSection>
        </div>
      )}
    </div>
  );
};

export default withAuth(Markets);
