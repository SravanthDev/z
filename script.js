document.getElementById('saveContact').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'onestopsolutions_1234567890.vcf'; // Replace with the actual path to your .vcf file
    link.download = 'onestopsolutions_1234567890.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


