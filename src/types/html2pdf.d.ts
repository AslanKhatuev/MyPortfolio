// types/html2pdf.d.ts
declare module "html2pdf.js" {
  interface Html2PdfOptions {
    margin?: number | number[];
    filename?: string;
    image?: { type: string; quality: number };
    html2canvas?: {
      scale?: number;
      useCORS?: boolean;
      allowTaint?: boolean;
      backgroundColor?: string;
      [key: string]: any;
    };
    jsPDF?: {
      unit: string;
      format: string;
      orientation: string;
      [key: string]: any;
    };
    pagebreak?: {
      mode: string[];
      [key: string]: any;
    };
  }

  interface Html2Pdf {
    set: (options: Html2PdfOptions) => Html2Pdf;
    from: (element: HTMLElement | string) => Html2Pdf;
    save: () => Promise<void>;
  }

  const html2pdf: () => Html2Pdf;
  export default html2pdf;
}
