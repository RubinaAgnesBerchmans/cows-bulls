import Route from '@ember/routing/route';
import $ from 'jquery';
export default Route.extend({
    randomNumber:0,
    max:0,
    min:0,
    iterations:0,
    init() {
        this._super(...arguments);
    },
    actions: {
        saveLevel(value) {
            this.set('numberLength', value);
            $('.level').hide();
            $('.guess').show();
            var helpConstant = Math.pow(10,value-1);
            this.set('min', 1 * helpConstant );
            this.set('max', 9 * helpConstant + (helpConstant-1));
            var range = this.max-this.min;
            this.set('randomNumber', parseInt(Math.random() * range) + this.min);
            console.log(this.randomNumber);
        },
        computeGuess(guess) {
            console.log(this.randomNumber);
            let randomNo = [...this.randomNumber+''].map(n=>+n);
            let guessNo = [...guess+ ''].map(n=>+n);
            let bulls = 0,cows = 0,i,j;
            this.set('iterations', this.iterations++);
            for( i=0; i< randomNo.length;i++) {
                for(j=0; j < guessNo.length;j++) {
                    if(randomNo[i] === guessNo[j] && randomNo[i]!=="*") {
                        if(i==j) {
                            cows++;
                            randomNo.splice(i,1,"*");
                        guessNo.splice(j,1,"*");
                        i=0;
                        break;
                        }
                        if(randomNo[j]!==guessNo[j]) {
                            bulls++;
                            randomNo.splice(i,1,"*");
                        guessNo.splice(j,1,"*");
                        i=0;
                        break;
                        }
                                
                    }
                }
            }
            if(cows === +this.numberLength) {
                document.getElementById('values').innerHTML = `Hurrah!!! U have won in ${this.iterations}!!!`;
            } else {
                var iterations = this.get('iterations');
                document.getElementById('values').innerHTML = `cows:${cows},bulls:${bulls} Iternation:${iterations}`;
            }
        }
    }
});
