// controller class for the index.html page
export class IndexController {

    // inject event manager
    constructor(em) {

        // register events listeners
        em.addListener('click', '#btn1', this.clickButton);

        em.addListener('click', '#p1', this.clickParagraph);

        em.addListener('createTitleEvent', 'body', this.createTitle);

        // fire a custom event after some time
        setTimeout(() => {
            console.log("firing event");
            em.fireEvent('createTitleEvent', 'body');
        }, 3000);

    }

    clickButton = function () {
        alert("button clicked");
    }

    clickParagraph = function () {
        let toggle = JSON.parse($('#p1').attr('toggled'));
        $('#p1').attr('toggled', toggle).toggleClass("toggled");
    }

    createTitle = function () {
        $('body').prepend('<h1>I am the title</h1>')
    }
}