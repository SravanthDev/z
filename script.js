document.getElementById('saveContact').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = ''; // Replace with the actual path to your .vcf file
    link.download = '.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

