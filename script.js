let regexForEmail = /[\w]+[@][\w]+[.][a-z]/
var answered = [];
var allStudents = [];
let myLocalStorages  = JSON.parse(localStorage.getItem("studentDetails"));

const quizData = [
    {
        question: 'The material used for constructing the core of an electromagnet is',
        a: 'A. iron',
        b: 'B. carbon',
        c: 'C. copper',
        d: 'D. steel',
        correct: 'A',
        explanation: 'Iron is the most suitable material used in electromagnets'
    }, {
        question: "Lenz's law is a law of the conservation of",
        a: 'A. energy',
        b: 'B. momentum',
        c: 'C. electric',
        d: 'D. electric charge',
        correct: 'A',
        explanation: ''
    }, {
        question: "The pitch of a sound note depends on",
        a: 'A. timbre',
        b: 'B. harmonics',
        c: 'C. quality',
        d: 'D. frequency',
        correct: 'D',
        explanation: ''
    }
    , {
        question: "The replacement of transition elements with one another in some compounds is known as",
        a: 'A. polymorphism',
        b: 'B. isomorphism',
        c: 'C. polydenate',
        d: 'D. dimorphism',
        correct: 'B',
        explanation: ''
    }
    , {
        question: "Compounds of transition metals with intermediate oxidation states generally give oxides which are ",
        a: 'A. acidic',
        b: 'B. amphoteric',
        c: 'C. basic',
        d: 'D. neutral',
        correct: 'C',
        explanation: 'They are called basic oxides.'
    }
    , {
        question: "A typical example of organic compund that undergoes sublimation is",
        a: 'A. Iodine',
        b: 'B. NH4₄Cl',
        c: 'C. Naphthalene',
        d: 'D. Sodium chloride',
        correct: 'C',
        explanation: 'Iodine and NH4₄Cl also sublime but they are not organic compounds.'
    }
    , {
        question: "Metals conduct electricity due to the presence of",
        a: 'A. bonded electrons',
        b: 'B. free mobile elecrons',
        c: 'C. crystal lattice structure',
        d: 'D. vacant atomic orbitals',
        correct: 'B',
        explanation: 'Free mobile electrons in the lattices of metals serve as carriers of an electric current'
    }
    , {
        question: "Iron can be extracted from",
        a: 'A. haemitite',
        b: 'B. cryolite',
        c: 'C. cassiterite',
        d: 'D. bauxite',
        correct: 'A',
        explanation: 'Haemitite is an ore of iron'
    }
    , {
        question: "Diamond is used in abrasives because of its",
        a: 'A. density',
        b: 'B. high melting point',
        c: 'C. lustre',
        d: 'D. hardness',
        correct: 'D',
        explanation: 'Diamond is very hard hence its use in abrasives'
    }
    , {
        question: "An alloy of mercury is",
        a: 'A. bronze',
        b: 'B. soft solder',
        c: 'C. amalgam',
        d: 'D. steel',
        correct: 'C',
        explanation: 'An alloy of mercury with any other metal is called an amalgam'
    }
    , {
        question: "Which of the following oxides is amphoteric?",
        a: 'A. MgO',
        b: 'B. CO₂',
        c: 'C. Al₂O₃',
        d: 'D. CuO',
        correct: 'C',
        explanation: 'Al₂O₃ is amphoteric, MgO and CuO are basic and CO₂ is acidic'
    }
    , {
        question: "Bronze is an alloy of copper and",
        a: 'A. aluminium',
        b: 'B. zinc',
        c: 'C. tin',
        d: 'D. iron',
        correct: 'C',
        explanation: 'Bronze is an alloy of copper and tin'
    }
    , {
        question: "Brass is an alloy of ",
        a: 'A. copper and zinc',
        b: 'B. copper and tin',
        c: 'C. iron and zinc',
        d: 'D. lead and copper',
        correct: 'A',
        explanation: 'Brass is an alloy of copper and zinc'
    }
    , {
        question: "Which of the following ores is not a metal ore?",
        a: 'A. cassiterite',
        b: 'B. graphite',
        c: 'C. malachite',
        d: 'D. bauxite',
        correct: 'B',
        explanation: 'Graphite is a form of carbon'
    }
    , {
        question: "Which of the following alloys is used in building the body of aircraft?",
        a: 'A. duralumin',
        b: 'B. brass',
        c: 'C. bronze',
        d: 'D. steel',
        correct: 'A',
        explanation: 'Duralumin(being light and highly resistant to corrosion) is used in the building of aircrafts.'
    }
    , {
        question: "Which of the following methods is used to isolate salts which decompose easily on heating from their solution?",
        a: 'A. evaporation',
        b: 'B. sublimation',
        c: 'C. crystallization',
        d: 'D. distillation',
        correct: 'C',
        explanation: 'The best method is crystallization. Evaporation is also used to isolate salts but it does not decompose easily on heating.'
    }
    , {
        question: "Chlorination of methane in the presence of light is a typical example of",
        a: 'A. addition reaction',
        b: 'B. elimination reaction',
        c: 'C. isomerization reaction',
        d: 'D. substitution reaction',
        correct: 'D',
        explanation: 'It is called substitution reaction'
    }
    , {
        question: "The type of bonding in the formation of ammonium ion (NH₄+) is known as _____",
        a: 'A. co-ordinate covalent bond',
        b: 'B. ionic bond',
        c: 'C. covalent bond',
        d: 'D. none',
        correct: 'A',
        explanation: 'The type of bonding is coordinate covalent'
    }
    , {
        question: "Qunatitative analysis of organic compounds can be achieved through the determination of the following except",
        a: 'A. molecular mass',
        b: 'B. boiling point',
        c: 'C. empirical formular',
        d: 'D. molecular formular',
        correct: 'D',
        explanation: 'The molecular formular'
    }
    , {
        question: "Berrylium shows same similarities to aluminium because they exhibit",
        a: 'A. isomerism',
        b: 'B. diagonal relationship',
        c: 'C. tautomerism',
        d: 'D. electronegativity',
        correct: 'B',
        explanation: 'They both have diagonal relationship'
    }
    
]

// const allStudents = []
if (localStorage.studentDetails) {
    allStudents = JSON.parse(localStorage.getItem("studentDetails"))
    }
function signUp() {
    var newStudent = {
        firstName : firstname.value,
        lastName : lastname.value,
        eMail : email.value, 
        password : psw.value,
        confirmPassword : cpsw.value,
    }

    allStudents.push(newStudent);
    localStorage.setItem("studentDetails", JSON.stringify(allStudents));
    console.log(allStudents);
    if (firstname.value == "" && lastname.value == "" && email.value == "" && psw.value == "" && cpsw.value == ""){
        alert("Error! Kindly enter your details!")
    }  else if (firstname.value == "") {
        alert("Enter your First Name")
    }  else if (lastname.value == "") {
        alert("Enter your Last Name")
    } else if (email.value == "") {
        alert("Enter your valid email address")
    } else if (psw.value == "") {
        alert("Enter Password")
    } else if (cpsw.value!== psw.value) {
        alert("Password does not match")
    } else if (regexForEmail.test(email.value)===false) {
        alert("E-mail not valid!\nEnter valid email address!")
    } else if (psw.value.length < 6) {
        alert("Password must not be less than 6 characters!")
    }
    else{
        window.location.href = "login.html"
    }
}

let options = document.getElementsByName('answer')
let progress = document.getElementById("progress");
const quiz = document.getElementById("quizzer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
let time = document.getElementById("time");
let currentQuiz = 0;
let score = 0;
h = 00;
m = 9;
s = 59;

loadQuiz();
loadQuiz2()
function loadQuiz() {
    const ans = selectAnswer()
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    progress.innerText = `${currentQuiz + 1}/${quizData.length}`
    if (currentQuiz+1 === quizData.length) {
        document.getElementById("nxt").style.display = "none"
        document.getElementById("sbt").style.display = "block"
    } else if (currentQuiz+1 < quizData.length) {
        document.getElementById("nxt").style.display = "block"
        document.getElementById("sbt").style.display = "none"
    }
    if (answered[currentQuiz] === "A") {
        document.getElementsByTagName('input').item(0).checked = true;
    } else if (answered[currentQuiz] === "B") {
        document.getElementsByTagName('input').item(1).checked = true;
    } else if (answered[currentQuiz] === "C") {
        document.getElementsByTagName('input').item(2).checked = true;
    } else if (answered[currentQuiz] === "D") {
        document.getElementsByTagName('input').item(3).checked = true;
    }
}
   
function stopTime() {
    quiz.style.display = "none";
    clearTimeout(setTime)
    let date = new Date()
    let user = JSON.parse(localStorage.getItem("currentCands"));
    if (date.getHours()<12) {
        demo1.innerHTML = `<p style:"font-family:dancing;">Good Morning! ${user.lastName} ${user.firstName}</p> You're welcome to QUIZDOM!<br>Read the instructions below before you start!`
    } else if (date.getHours()<17) {
        demo1.innerHTML = `<p style:"font-family:dancing;">Good Afternoon! ${user.lastName} ${user.firstName}</p> You're welcome to QUIZDOM!<br>Read the instructions below before you start!`
    } else if (date.getHours()>=17) {
        demo1.innerHTML = `<p style:"font-family:dancing;">Good Evening! ${user.lastName} ${user.firstName}</p> You're welcome to QUIZDOM!<br>Read the instructions below before you start!`
    }
}

function start() {
    if (confirm("Are you sure you want to start the quiz?")) {
        document.getElementById("quiz").style.display = "block";
        document.getElementById("note").style.display = "none";
        setTimeout(loadQuiz2, 700)
    }
   else{
       location.reload()
   }
}

function selectAnswer() {
    let options = document.getElementsByName('answer')
    let ans = undefined;
    options.forEach(element => {
        if (element.checked) {
            ans = element.id
        }     
        });    
          return ans;
}

function deselectAnswers() {
    let options = document.getElementsByName('answer');
    options.forEach(element => {
        element.checked = false;
    });
}


function next() {
    var date = new Date();
    let user = JSON.parse(localStorage.getItem("currentCands"));
    const ans = selectAnswer();
    
    if (ans) {
        answered.push(ans);
        localStorage.setItem("correctAns", answered);
            if (answered[currentQuiz] === quizData[currentQuiz].correct) {
                score = score + 1;  
            }
        loadQuiz()
        currentQuiz++;
        
        if (currentQuiz < quizData.length) {
            document.getElementById("prev").style.display = "block"
            loadQuiz();
        } 
         else{
             document.getElementById("quiz").style.display = "none";
             quiz.style.display = "block"
             document.getElementById("result1").innerText = `${quizData.length}`
             document.getElementById("result2").innerText = `${score}`
             document.getElementById("result3").innerText = `${(score/quizData.length).toFixed(2)*100}%`
             document.getElementById("result4").innerText = `${date.toDateString()}`
             document.getElementById("result5").innerText = `${9-m}min ${60-s}sec`
             document.getElementById("result6").innerText = `${user.firstName}`
             quiz.innerHTML += `<h5 style:"font-family:dancing;">Dear ${user.firstName}, your score is ${score}/${quizData.length}</h5><br>
             <button onclick="location.reload()">Attempt quiz again</button>  <br>
             <button onclick="correction()">Check corrections</button>`                
        } 
    }     
}

function prev() {
    currentQuiz--
    loadQuiz();
    
    if (answered[currentQuiz] == quizData[currentQuiz].correct) {
        score--
    } answered.pop();
    if (currentQuiz+1 === quizData.length) {
        document.getElementById("nxt").style.display = "none"
        document.getElementById("sbt").style.display = "block"
    } 
    if (currentQuiz === 0) {
        document.getElementById("prev").style.display = "none"
    }
    else if (currentQuiz+1 < quizData.length) {
        document.getElementById("nxt").style.display = "block"
        document.getElementById("sbt").style.display = "none"
    }
   
}

function attempt() {
    location.href = "quiz.html";
}

function loadQuiz2() {
    time.innerText = `0${h}:${m}:${s}`
    var date = new Date();
    let user2 = JSON.parse(localStorage.getItem("currentCands"));
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    progress.innerText = `${currentQuiz + 1}/${quizData.length}`
    if (currentQuiz+1 == quizData.length) {
        document.getElementById("nxt").style.display = "none"
        document.getElementById("sbt").style.display = "block"
    }
    if (s<=9 && m<=9) {
        time.innerText = `0${h}:0${m}:0${s}`
    } else if (s<=9 && m>9) {
        time.innerText = `0${h}:${m}:0${s}`
    } else if (s>9 && m<=9) {
        time.innerText = `0${h}:0${m}:${s}`
    }
    s--
    setTime = setTimeout(loadQuiz2, 700)
    if (s==0 && m == 0) {
        clearTimeout(setTime)
        document.getElementById("quiz").style.display = "none";
             quiz.style.display = "block"
             document.getElementById("result1").innerText = `${quizData.length}`
             document.getElementById("result2").innerText = `${score}`
             document.getElementById("result3").innerText = `${(score/quizData.length).toFixed(2)*100}%`
             document.getElementById("result4").innerText = `${date.toDateString()}`
             document.getElementById("result5").innerText = `${9-m}min ${60-s}sec`
             document.getElementById("result6").innerText = `${user2.firstName}`
             quiz.innerHTML += `<h5 style:"font-family:dancing;">Dear ${user2.firstName}, your score is ${score}/${quizData.length}</h5><br>
             <button onclick="location.reload()">Attempt quiz again</button>  <br>
             <button onclick="correction()">Check corrections</button>`                
    } else if (m>0 && s==0) {
        m--
        s=59
    }
    if (m==0 && s==4) {
        time.style.backgroundColor = "rgb(243, 111, 59)"
    }
}

function correction() {
    questionEl.style.display = "none";
    time.style.display = "none";
    progress.style.display = "none";
    quiz.style.display = "none";
    document.getElementById("list").style.display = "none";
    document.getElementById("nxt").style.display = "none";
    document.getElementById("sbt").style.display = "none";
    document.getElementById("prev").style.display = "none";
    document.getElementById("quiz").style.display = "block"
    document.getElementById("review").style.display = "block"
    quizData.map((item, index)=>{
        if (answered[index] == item.correct) {
            document.getElementById("quiz").innerHTML += `<p>${index+1}. ${item.question} <br> ${item.a} <br> ${item.b} <br> ${item.c} <br> ${item.d} <br><br>Your Answer: ${answered[index]}  ✅<br></p> <p class='contain'>Explanation: ${item.explanation} <br><br></p><hr>`   
        } else  {
            document.getElementById("quiz").innerHTML += `<p>${index+1}. ${item.question} <br> ${item.a} <br> ${item.b} <br> ${item.c} <br> ${item.d} <br><br>Your Answer: ${answered[index]}  ❌ <br> Correct Option: ${item.correct}<br></p><p class='contain'> Explanation: ${item.explanation} <br><br></p><hr>`   
        }
    })
   
}


function logIn() {
    let currentUsers = {
        userEmail : userMail.value,
        userPsw : psword.value
    }
    let myCurrentUsers = myLocalStorages.find((val, _)=>
    val.eMail == userMail.value && val.password == psword.value 
    )
    localStorage.setItem("currentCands", JSON.stringify(myCurrentUsers));
    if (myCurrentUsers) {
        location.href = "quiz.html"
        alert(`Login successful! ${myCurrentUsers.firstName} ${myCurrentUsers.lastName}`)
    } else if (userMail.value == "") {
        document.getElementById("invalid1").innerHTML = `Enter your valid email address`
        invalid1.style.display = "block"
        invalid.style.display = "none"
        invalid2.style.display = "none"
    } else if (psword.value == "") {
        document.getElementById("invalid1").innerHTML = `Enter your password!`
        invalid1.style.display = "block"
        invalid.style.display = "none"
        invalid2.style.display = "none"
    } else if (currentUsers.userEmail!==myCurrentUsers) {
        invalid.style.display = "block"
        invalid1.style.display = "none"
    } else if (currentUsers.userPsw!==myCurrentUsers) {
        invalid.style.display = "block"
        invalid1.style.display = "none"
    } if (currentUsers.userEmail == "" && currentUsers.userPsw == "") {
        document.getElementById("invalid1").innerHTML = `Kindly enter your e-mail and password!`
    } else if(myCurrentUsers == "") {
        invalid2.style.display = "block"   
        invalid.style.display = "none"
        invalid1.style.display = "none"
    }
}

var span = document.getElementById("close");
function closeIt() {
if  (confirm ('Do you want to close this modal?')) {
    modal.style.display = "none";
} 
}