"use client";

import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

// Required to make it work
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PDFFileViewer() {
  const [numPages, setNumPages] = useState(null);

  const onLoadSuccess = ({ numPages }: any) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document file="/Summer-Guide.pdf" onLoadSuccess={onLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
}
