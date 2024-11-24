function change(num){
    let numb=num;
    
    if(numb==1){
        document.getElementById("ab-info").innerHTML=
        `<ol>
                            <li>Core java (DSA)</li><br>
                            <li>PostgreSQL</li><br>
                            <li>C programing</li><br>
                            <li>HTML</li><br>
                            <li>CSS</li><br>
                            <li>Java-Script</li>
                        </ol>`
    }
    else if(numb==2){
        document.getElementById("ab-info").innerHTML=
        `I have an experience of participating coding competitions like <br><br>
                        - NASA Space Apps Challenge <br>
                        - All India Hackathon<br>
                        - Coding competitions`
    }
    else if(numb==3){
        document.getElementById("ab-info").innerHTML=
        `<h3 id="bca">BCA-Science</h3><br>
                        Currently persuing BCA-Science degree at MIT ACSC Alandi. <br>
                        Completed 10th and 12th from Shri Bhairavnath Vidyalay Bhosari. <br>
                        with marks <br>
                       - 10th 87% <br>
                       - 12th 70.33%  `
    }
}