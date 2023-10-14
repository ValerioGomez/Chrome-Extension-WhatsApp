const button = document.querySelector('#enviar');
        const input = document.querySelector('#input');

        const abrirURL = () => {
            const numero = input.value;
            if (numero) {
                // Verificar que la entrada solo contenga números
                const numbersOnly = numero.replace(/\D/g, '');
                if (numbersOnly) {
                    window.open(`https://api.whatsapp.com/send/?phone=51${numbersOnly}`, '_blank');
                }
            }
        };

        button.addEventListener('click', abrirURL);

        input.addEventListener('paste', (event) => {
            event.preventDefault();
            const clipboardData = event.clipboardData || window.clipboardData;
            const pastedText = clipboardData.getData('text/plain');
            // Filtrar y reemplazar caracteres no numéricos
            const numbersOnly = pastedText.replace(/\D/g, '');
            input.value = numbersOnly;
        });

        input.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                abrirURL();
            }
        });

        input.addEventListener('input', (event) => {
            // Filtrar y reemplazar caracteres no numéricos en tiempo real
            const inputValue = input.value;
            const numbersOnly = inputValue.replace(/\D/g, '');
            input.value = numbersOnly;
        });

        input.focus();