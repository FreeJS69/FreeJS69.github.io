var app = {
    initialize: function() {
        this.bindEvents();
        this.setupVue();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready'); 
    },
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    },
    setupVue: function() {
        var vm = new Vue({
            el: "#vue-instance",
            data: {
                counter: 0,
                color : '',
                randomIndexQuestion: '',
                randomQuestion: '',
                trueAnswer: '',
                question: [
                    'Я буду любить?',
                    'Я буду любить.',
                    'Я не буду любить.',
                    'Я люблю?',
                    'Я люблю.',
                    'Я не люблю.',
                    'Я любил?',
                    'Я любил.',
                    'Я не любил.',
                    'Ты будешь любить?',
                    'Ты будешь любить.',
                    'Ты не будешь любить.',
                    'Ты любишь?',
                    'Ты любишь.',
                    'Ты не любишь.',
                    'Ты любил?',
                    'Ты любил.',
                    'Ты не любил.',
                    'Мы будем любить?',
                    'Мы будем любить.',
                    'Мы не будем любить.',
                    'Мы любим?',
                    'Мы любим.',
                    'Мы не любим.',
                    'Мы любили?',
                    'Мы любили.',
                    'Мы не любили.',
                    'Они будут любить?',
                    'Они будут любить.',
                    'Они не будут любить.',
                    'Они любят?',
                    'Они любят.',
                    'Они не любят.',
                    'Они любили?',
                    'Они любили.',
                    'Они не любили.',
                    'Он будет любить?',
                    'Он будет любить.',
                    'Он не будет любить.',
                    'Он любит?',
                    'Он любит.',
                    'Он не любит.',
                    'Он любил?',
                    'Он любил.',
                    'Он не любил.',
                    'Она будет любить?',
                    'Она будет любить.',
                    'Она не будет любить.',
                    'Она любит?',
                    'Она любит.',
                    'Она не любит.',
                    'Она любила?',
                    'Она любила.',
                    'Она не любила.'],
                answer: [
                    'Will I love?',
                    'I will love',
                    'I will not love',
                    'Do I love?',
                    'I love',
                    'I don\'t love',
                    'Did I love?',
                    'I loved',
                    'I didn\'t love',
                    'Will you love?',
                    'You will love',
                    'You will not love',
                    'Do you love?',
                    'You love',
                    'You don\'t love',
                    'Did you love?',
                    'You loved',
                    'You didn\'t love',
                    'Will we love?',
                    'We will love',
                    'We will not love',
                    'Do we love?',
                    'We love',
                    'We don\'t love',
                    'Did we love?',
                    'We loved',
                    'We didn\'t love',
                    'Will they love?',
                    'They will love',
                    'They will not love',
                    'Do they love?',
                    'They love',
                    'They don\'t love',
                    'Did they love?',
                    'They loved',
                    'They didn\'t love',
                    'Will he love?',
                    'He will love',
                    'He will not love',
                    'Does he love?',
                    'He loves',
                    'He doesn\'t love',
                    'Did he love?',
                    'He loved',
                    'He didn\'t love',
                    'Will she love?',
                    'She will love',
                    'She will not love',
                    'Does she love?',
                    'She loves',
                    'She doesn\'t love',
                    'Did she love?',
                    'She loved',
                    'She didn\'t love'],

                btnAnswer: [],
                chbi: true,
                chby: false,
                chbw: false,
                chbt: false,
                chbh: false,
                chbs: false,
            },
            
            methods: {

                getRndQi: function() {
                    randomIndexQuestion = Math.floor(Math.random() * (this.question.length - 45));
                    this.getRndQBi();
                },
                getRndQBi: function() {
                    this.randomQuestion = this.question[randomIndexQuestion];
                    this.trueAnswer = "";
                    for( i = 0; i < 9; i++ ) {
                        this.btnAnswer[i] = this.answer[i];
                    }
                },
                getRndQy: function() {
                    randomIndexQuestion = 9 + Math.floor((17-9+1) * Math.random());
                    this.getRndQBy();

                },
                getRndQBy: function() {
                    this.randomQuestion = this.question[randomIndexQuestion];
                    this.trueAnswer = "";
                    for( i = 9, j = 0 ; j < 9; i++, j++ ) {
                        this.btnAnswer[j] = this.answer[i];
                    }
                },
                getRndQw: function() {
                    randomIndexQuestion = 18 + Math.floor((26-18+1) * Math.random());
                    this.getRndQBw();
                },
                getRndQBw: function() {
                    this.randomQuestion = this.question[randomIndexQuestion];
                    this.trueAnswer = "";
                    for ( i = 18, j = 0 ; j < 9; i++, j++ ) {
                        this.btnAnswer[j] = this.answer[i];
                    }
                },
                getRndQt: function() {
                    randomIndexQuestion = 27 + Math.floor((35-27+1) * Math.random());
                    this.getRndQBt();
                },
                getRndQBt: function() {
                    this.randomQuestion = this.question[randomIndexQuestion];
                    this.trueAnswer = "";
                    for ( i = 27, j = 0 ; j < 9; i++, j++ ) {
                        this.btnAnswer[j] = this.answer[i];
                    }
                },
                getRndQh: function() {
                    randomIndexQuestion = 36 + Math.floor((44-36+1) * Math.random());
                    this.getRndQBh();
                },
                getRndQBh: function() {
                    this.randomQuestion = this.question[randomIndexQuestion];
                    this.trueAnswer = "";
                    for ( i = 36, j = 0 ; j < 9; i++, j++ ) {
                        this.btnAnswer[j] = this.answer[i];
                    }
                },
                getRndQs: function() {
                    randomIndexQuestion = 45 + Math.floor((53-45+1) * Math.random());
                    this.getRndQBs();
                },
                getRndQBs: function() {
                    this.randomQuestion = this.question[randomIndexQuestion];
                    this.trueAnswer = "";
                    for ( i = 45, j = 0 ; j < 9; i++, j++ ) {
                        this.btnAnswer[j] = this.answer[i];
                    }
                },

                getRndQiywths: function() {
                    randomIndexQuestion = Math.floor(Math.random() * this.question.length);
                    if ( randomIndexQuestion < 9) {
                        this.getRndQBi();
                    }
                    else if ( randomIndexQuestion >= 9 & randomIndexQuestion <= 17) {
                        this.getRndQBy();
                    }
                    else if ( randomIndexQuestion >= 18 & randomIndexQuestion <= 26) {
                        this.getRndQBw();
                    }
                    else if ( randomIndexQuestion >= 27 & randomIndexQuestion <= 35) {
                        this.getRndQBt();
                    }
                    else if ( randomIndexQuestion >= 36 & randomIndexQuestion <= 44) {
                        this.getRndQBh();
                    }
                    else if ( randomIndexQuestion >= 45) {
                        this.getRndQBs();
                    }
                },

                getRandomQuestion: function() {
                    if (this.chbi  & !this.chby  & !this.chbw & !this.chbt & !this.chbh & !this.chbs) {
                        this.getRndQi();
                    }
                    else if (!this.chbi & this.chby & !this.chbw & !this.chbt & !this.chbh & !this.chbs) {
                        this.getRndQy();
                    }
                    else if (!this.chbi & !this.chby & this.chbw & !this.chbt & !this.chbh & !this.chbs) {
                        this.getRndQw();
                    }
                    else if (!this.chbi & !this.chby & !this.chbw & this.chbt & !this.chbh & !this.chbs) {
                        this.getRndQt();
                    }
                    else if (!this.chbi & !this.chby & !this.chbw & !this.chbt & this.chbh & !this.chbs) {
                        this.getRndQh();
                    }
                    else if (!this.chbi & !this.chby & !this.chbw & !this.chbt & !this.chbh & this.chbs) {
                        this.getRndQs();
                    }

                

                    else if (this.chbi & this.chby & this.chbw & this.chbt & this.chbh & this.chbs) 
                    {
                        this.getRndQiywths();
                    }
                

                },
                getTrueAnswer: function(number) {

                    if (randomIndexQuestion < 9 & randomIndexQuestion === number) {
                        this.counter++;
                        this.getRandomQuestion();
                    }
                    else if (randomIndexQuestion >= 9 & (randomIndexQuestion - 9) === number) {
                        this.counter++;
                        this.getRandomQuestion();
                    } 
                    else if (randomIndexQuestion >= 18 & (randomIndexQuestion - 18) === number) {
                        this.counter++;
                        this.getRandomQuestion();
                    } 
                    else if (randomIndexQuestion >= 27 & (randomIndexQuestion - 27) === number) {
                        this.counter++;
                        this.getRandomQuestion();
                    } 
                    else if (randomIndexQuestion >= 36 & (randomIndexQuestion - 36) === number) {
                        this.counter++;
                        this.getRandomQuestion();
                    } 
                    else if (randomIndexQuestion >= 45 & (randomIndexQuestion - 45) === number) {
                        this.counter++;
                        this.getRandomQuestion();
                    } 

                    else {
                        this.trueAnswer = "НЕ ВЕРНО !";
                        this.color = "red";
                    } 
                
                    
                },
            },
            mounted: function() {
                this.getRandomQuestion();
                window.addEventListener('keyup', function(event) {
                    switch (event.keyCode) {
                        case 103:
                            vm.getTrueAnswer(0);
                            break;
                        case 104:
                            vm.getTrueAnswer(1);
                            break;
                        case 105:
                            vm.getTrueAnswer(2);
                            break;
                        case 100:
                            vm.getTrueAnswer(3);
                            break;
                        case 101:
                            vm.getTrueAnswer(4);
                            break;
                        case 102:
                            vm.getTrueAnswer(5);
                            break;
                        case 97:
                            vm.getTrueAnswer(6);
                            break;
                        case 98:
                            vm.getTrueAnswer(7);
                            break;
                        case 99:
                            vm.getTrueAnswer(8);
                            break;
                    }
                    
                  });
             },
             
            

        });
    }
};



app.initialize();
