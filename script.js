window.addEventListener('load', function() {
    init();
})

let id = 0;

// class Skill(
//     constructor(){

//     }
// )

function createId() {
    id++;
    return id;
}

function init() {
    let skillList = document.getElementById('skillList');
    let addSkillButton = document.getElementById('addSkillButton');
    let skillInputText = document.getElementById('skillInputText');
    

    let form = document.querySelector('form');
    form.addEventListener('submit', function(event){
        event.preventDefault();
    });
    //skillList.innerHTML = `<li>Hello Again</li>`;


    function createSkillLi(newId) {
        let newSkillLi = document.createElement("li");
        newSkillLi.id = newId;
        newSkillLi.classList = "flex-justify-content";
        //newSkillLi.innerText = skillInputText.value;
        return newSkillLi;
    }

    function createSkillCount(newId) {
        let pCountTag = document.createElement('p');
        let count = 0;
        pCountTag.innerText = `${count}`;
        pCountTag.classList = "inline";
        let incrementButton = createIncrementButton(count);
        let decrementButton = createDecrementButton(count);

        incrementButton.addEventListener('click', function() {
            count++;
            pCountTag.innerText = `${count}`;
        })

        decrementButton.addEventListener('click', function() {
            count--;
            pCountTag.innerText = `${count}`;
        })
        // console.log(pCountTag);
        // console.log(incrementButton);
        // console.log(decrementButton);
        let skillNameSpan = createSpan();
        skillNameSpan.textContent = skillInputText.value;
        let span = createSpan();
        //let tagsOfSkillCombination = 
        span.append(skillNameSpan, pCountTag, incrementButton, decrementButton);
        //console.log(span);
        return span;
    }

    function createIncrementButton(count) {
        let incrementButton = document.createElement('input');
        incrementButton.type = "button";
        incrementButton.value = "+1";
        incrementButton.classList = "inline";
        return incrementButton;
    }

    function createDecrementButton(count) {
        let decrementButton = document.createElement('input');
        decrementButton.type = "button";
        decrementButton.value = "-1";
        decrementButton.classList = "inline";
        return decrementButton;
    }

    function createSpan(){
        let span = document.createElement('span');
        return span;
    }

    function validate(skillInputText) {
        if(skillInputText.value === '') {
            alert("You have to enter a skill!");
            return false;    
        }
        else {
            return true;
        }
    }

    addSkillButton.addEventListener('click', function(e) {
        e.preventDefault();

        if(validate(skillInputText) === false) {
            return;
        };

        let newId = createId();

        let newSkillDiv = document.createElement("div");
        newSkillDiv.classList = "inline";
        let newSkillLi = createSkillLi(newId);
        let newRemoveButton = document.createElement("input");
        
        newRemoveButton.type = "button";
        newRemoveButton.value = `Remove ${skillInputText.value}`;
        newRemoveButton.classList = "inline";
        
        //console.log(newRemoveButton);
        //newSkillLi.innerHTML = newSkillLi + `${newRemoveButton}`;
        let newSkillCount = createSkillCount();

        newSkillDiv.append(newSkillCount, newRemoveButton);
        //newSkillDiv.appendChild(newRemoveButton);
        newSkillLi.append(newSkillDiv);
        
        skillList.appendChild(newSkillLi);
        

        newRemoveButton.addEventListener('click', function() {
            skillList.removeChild(newSkillLi);
        });
        //let removeButton = document.createElement("input")

        skillInputText.value = '';
    })
}
