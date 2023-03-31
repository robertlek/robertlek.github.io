function translateToEnglish() {
    document.getElementById("text-function-name").innerText = "Software Developer";
    document.getElementById("text-quote").innerText = `# "Why do Java programmers have to wear glasses? Because they don't C#."`;
    document.getElementById("text-contact-me-label").innerText = "Contact me:";
    document.getElementById("text-user-email-label").innerText = "Your email address:";
    document.getElementById("text-user-name-label").innerText = "Your full name:";
    document.getElementById("text-contact-me-button").innerText = "Contact me!";
    document.getElementById("text-personal-details-label").innerText = "Personal details:";
    document.getElementById("text-current-age").innerText = "Current age:";
    document.getElementById("text-location").innerText = "Location:";
    document.getElementById("text-phone-number").innerText = "Phone number:";
    document.getElementById("text-email-address").innerText = "Email address:";
    document.getElementById("text-home-button").innerText = "Home";
    document.getElementById("text-skills-button").innerText = "Skills";
    document.getElementById("text-projects-button").innerText = "Projects";
    document.getElementById("text-languages-button").innerText = "Languages";

    document.getElementById("tab-home").innerHTML =
        `
        <h2>
            <i class="fa-solid fa-house margin-right-md"></i>
            <span>Home</span>
        </h2>
        <p>Hey there!</p>
        <br />
        <p>Let me introduce myself! My name is Robert Andrei Leca and I am a 21 years old passionate guy about programming.</p>
        <p>At this moment, I am student of "Lucian Blaga" University of Sibiu, studying Computer Science for bachelor's degree.</p>
        <p>Also, I am currently working part-time for Industrial Software SRL as a Junior Web Developer since October 2022.</p>
        <br />
        <h3>About me:</h3>
        <p>
            I am an ambitious, serious and responsible person. Usually, I like to put a lot of passion in what I am doing
            and most of the time the final result is as good as I would expect it to be. Also, I like to socialize with
            the persons around me and I integrate fast in a collective of people. It is also worth mentioning that I am
            a fast learner, especially for the things I really love to do such as programming and learning new tehnologies.
        </p>
        <br />
        <h3>My hobbies:</h3>
        <p>
            Outside of the programming world, I like to play video games, watch a good movie, go outside in the nature,
            spend some precious time with my family or practice a healthy activity such as a gym workout.
        </p>
        `;
}

function translateToRomanian() {
    document.getElementById("text-function-name").innerText = "Dezvoltator Software";
    document.getElementById("text-quote").innerText = `# "De ce programatorii Java poartă ochelari? Deoarece ei nu văd precis (C#)."`;
    document.getElementById("text-contact-me-label").innerText = "Contactează-mă:";
    document.getElementById("text-user-email-label").innerText = "Adresa ta de email:";
    document.getElementById("text-user-name-label").innerText = "Numele tău întreg:";
    document.getElementById("text-contact-me-button").innerText = "Contactează-mă!";
    document.getElementById("text-personal-details-label").innerText = "Detalii personale:";
    document.getElementById("text-current-age").innerText = "Vârsta curentă:";
    document.getElementById("text-location").innerText = "Locație:";
    document.getElementById("text-phone-number").innerText = "Număr de telefon:";
    document.getElementById("text-email-address").innerText = "Adresă de email:";
    document.getElementById("text-home-button").innerText = "Acasă";
    document.getElementById("text-skills-button").innerText = "Skill-uri";
    document.getElementById("text-projects-button").innerText = "Proiecte";
    document.getElementById("text-languages-button").innerText = "Limbi";

    document.getElementById("tab-home").innerHTML =
        `
        <h2>
            <i class="fa-solid fa-house margin-right-md"></i>
            <span>Acasă</span>
        </h2>
        <p>Salutare!</p>
        <br />
        <p>Permite-mi să mă introduc! Numele meu este Leca Robert Andrei și sunt un tânăr de 21 de ani, pasionat de programare.</p>
        <p>În acest moment, sunt student la Universitatea "Lucian Blaga" din Sibiu, și studiez informatică la nivel de licență.</p>
        <p>De asemenea, în prezent lucrez part-time pentru Industrial Software SRL ca și Junior Web Developer din octombrie 2022.</p>
        <br />
        <h3>Despre mine:</h3>
        <p>
            Sunt o persoană ambițioasă, serioasă și responsabilă. De obicei, îmi place să pun foarte multă pasiune în ceea
            ce fac și de cele mai multe ori rezultatul este la fel de bun pe cât m-aș fi așteptat să fie. De asemenea, îmi
            place să socializez cu persoanele din jurul meu și mă intregrez rapid într-un colectiv. Este de meționat faptul
            că sunt o persoană care învață rapid, în special pentru lucrurile pe care iubesc să le fac cum ar fi programarea
            sau învățarea unei noi tehnologii.
        </p>
        <br />
        <h3>Hobby-urile mele:</h3>
        <p>
            În exteriorul lumii programării, îmi place să mă joc jocuri video, să ma uit la un film bun, să ies afară în
            natură, să petrec timp prețios cu familia mea sau să desfășor o activitate sănătoasă precum un antrenament la
            sală.
        </p>
        `;
}

translateToEnglish();