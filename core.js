(function(){
    let obOwnerForm = document.getElementById('owner');
    obOwnerForm.addEventListener('submid',function(){
        event.preventDefault();




        let arFields = obOwnerForm.querySelectorAll('input');
        let owner = new Model();
        arFields.forEach(item =>{
            let params = {};
            params[item.name] = item.value
            owner.set(params)
        })
        let obModel = new owner(owner.data)
        arOwners.push(obModel);
        console.log(arOwners)
        DB.setvalue('owners',arOwners)
    })
})(window)
