document.addEventListener("DOMContentLoaded", function() {
    // Aqui você pode carregar os termos e condições de uso dinamicamente
    // Este é apenas um exemplo estático
    var termsContent = `
        <p>1. Uso do Site: O site da JC Cosmetics destina-se apenas a fins informativos e de compra. ...</p>
        <p>2. Propriedade Intelectual: Todo o conteúdo presente neste site, incluindo, mas não se limitando a textos, imagens, logotipos, e design, é de propriedade da JC Cosmetics ou de seus licenciadores e é protegido por leis de direitos autorais e outras leis de propriedade intelectual. ...</p>
        <p>3. Informações Pessoais: Ao fornecer informações pessoais durante o processo de compra, você concorda em fornecer informações verdadeiras, precisas, atualizadas e completas conforme solicitado. ...</p>
        <p>4. Alterações nos Termos: Reservamo-nos o direito de modificar estes termos e condições a qualquer momento, sem aviso prévio. ...</p>
        <p>5. Limitação de Responsabilidade: Em nenhuma circunstância a JC Cosmetics será responsável por quaisquer danos diretos, indiretos, consequenciais, incidentais ou especiais decorrentes do uso ou da incapacidade de usar este site. ...</p>
    `;
    document.getElementById('terms-content').innerHTML = termsContent;
});
