$(document).ready(function() {
    // Manejar clic en botones "Aprender más" en threats.html
    $('.learn-more').click(function() {
        const threatType = $(this).data('threat');
        let title = '';
        let content = '';
        
        switch(threatType) {
            case 'phishing':
                title = 'Phishing';
                content = '<p>El phishing es un tipo de ingeniería social donde los atacantes envían comunicaciones fraudulentas que parecen provenir de una fuente confiable, generalmente por correo electrónico. El objetivo es robar datos confidenciales como credenciales de inicio de sesión y números de tarjetas de crédito.</p><p><strong>Cómo protegerse:</strong> Verifica siempre la URL antes de introducir credenciales, no abras archivos adjuntos sospechosos, y usa filtros anti-phishing.</p>';
                break;
            case 'ransomware':
                title = 'Ransomware';
                content = '<p>El ransomware es un tipo de malware que impide a los usuarios acceder a su sistema o archivos personales y exige el pago de un rescate para recuperar el acceso. Los ataques de ransomware suelen propagarse a través de archivos adjuntos de correo electrónico o descargas de sitios web maliciosos.</p><p><strong>Cómo protegerse:</strong> Mantén copias de seguridad actualizadas, no pagues el rescate (no garantiza recuperar los archivos), y mantén tu software actualizado.</p>';
                break;
            case 'malware':
                title = 'Malware';
                content = '<p>El malware es software diseñado para dañar o infiltrarse en un sistema sin el conocimiento del usuario. Puede incluir virus, gusanos, troyanos, spyware, adware y otros programas maliciosos.</p><p><strong>Cómo protegerse:</strong> Usa software antivirus actualizado, no descargues archivos de fuentes no confiables, y mantén tu sistema operativo actualizado.</p>';
                break;
            case 'ddos':
                title = 'Ataques DDoS';
                content = '<p>Un ataque de denegación de servicio distribuido (DDoS) intenta interrumpir el tráfico normal de un servidor, servicio o red abrumando el objetivo o su infraestructura con una avalancha de tráfico de Internet.</p><p><strong>Cómo protegerse:</strong> Usa servicios de mitigación DDoS, configura firewalls y sistemas de detección de intrusiones, y mantén una infraestructura redundante.</p>';
                break;
        }
        
        $('#modalTitle').text(title);
        $('#modalBody').html(content);
        $('#threatModal').modal('show');
    });
    
    // Validación del formulario de contacto
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        
        // Validación simple
        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();
        
        if(name && email && message) {
            // Aquí normalmente enviarías los datos a un servidor
            $('#formSuccess').removeClass('d-none');
            $('#contactForm')[0].reset();
            
            // Ocultar el mensaje después de 5 segundos
            setTimeout(function() {
                $('#formSuccess').addClass('d-none');
            }, 5000);
        }
    });
    
    // Test de seguridad
    $('#submitTest').click(function() {
        const q1 = $('input[name="q1"]:checked').val();
        const q2 = $('input[name="q2"]:checked').val();
        
        if(!q1 || !q2) {
            alert('Por favor responde todas las preguntas');
            return;
        }
        
        let score = 0;
        
        // Puntaje pregunta 1
        if(q1 === 'a') score += 2;
        else if(q1 === 'b') score += 1;
        
        // Puntaje pregunta 2
        if(q2 === 'a') score += 2;
        else if(q2 === 'b') score += 1;
        
        let resultText = '';
        
        if(score >= 3) {
            resultText = '¡Excelente! Tus hábitos de seguridad son muy buenos. Sigue así.';
        } else if(score >= 2) {
            resultText = 'No está mal, pero hay áreas donde puedes mejorar tu seguridad. Revisa nuestros consejos.';
        } else {
            resultText = 'Tu seguridad en línea está en riesgo. Te recomendamos urgentemente implementar mejores prácticas.';
        }
        
        $('#resultText').text(resultText);
        $('#testResult').removeClass('d-none');
    });
});