"use client";

import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

// This tells react-pdf where to find the worker script
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PDFFileViewer() {
  const [numPages, setNumPages] = useState<number | null>(null);

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document
        file="/Summer-Guide.pdf"
        onLoadSuccess={onLoadSuccess}
        onLoadError={(error) => console.error("Error loading PDF:", error)}
      >
        {Array.from(new Array(numPages), (_, index) => (
          <Page key={index} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
}
