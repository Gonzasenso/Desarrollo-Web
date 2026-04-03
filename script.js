function descargarCv(){
    const link = document.createElement("a");
    link.href = "./cv/CV-Gonzalo-Asenso.pdf";
    link.download = "CV-Gonzalo-Asenso.pdf";
    link.click();
}