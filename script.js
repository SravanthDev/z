document.getElementById('saveContact').addEventListener('click', function() {
    console.log("Button clicked, starting vCard download...");
    
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:John Doe
ORG:Your Company
TEL:+1234567890
EMAIL:john.doe@example.com
END:VCARD
    `;
    
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contact.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
