//Folder Select
import card from "./cardDataForBrowser";
    const folders = document.querySelector('.foldergroup');
        let allproduct = document.querySelector('.allProduct');
        let supermarket = document.querySelector('.supermarket');
        let breadSweats = document.querySelector('.bread-sweats');
        let limitedEdition = document.querySelector('.limited-edition');

        allproduct.addEventListener('click', ()=> {
            console.log('all')
            console.log(card[0])
        })
