function Calculator (){
    this.display = document.querySelector('.display');

    this.init = () => {
        this.getClick();
        this.getEnter();
    }
    this.getEnter = () => {
       this.display.addEventListener ('keypress', e => {
            if (e.keyCode === 13){
                this.doMath()
            }
            
        })
    }
    this.getClick = () => {
        document.addEventListener ('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.numToDisplay(el);
            if (el.classList.contains('btn-eq')) this.doMath();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-clear')) this.clear();
            
        });
    }

    this.numToDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus()
    }
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice (0, -1);
    this.doMath = () => {
        try {  
            let account = eval (this.display.value)
            if (!account){
                alert ('Conta inválida')
                return;
            }
            this.display.value = account
        }catch (e){
            alert ('Conta inválida')
            return;

        }
    }
    
}

const calculator = new Calculator ();

calculator.init ()