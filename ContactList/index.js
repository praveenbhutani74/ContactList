const express=require('express');
const path=require('path');
const port=7000;

const db=require('./config/mongoose');
const Contact=require('./models/contact');
const app=express();

app.set('view engine','ejs');
app.set('Views',path.join(__dirname,'Views'));
app.use(express.urlencoded());
app.use(express.static('assests'));
var Contactlist=[
    {
   
        name:"praveen",
        phone:941191203
        
        },
{
   
    name:"praveen",
    phone:941191203
    
    },
    {
   
        name:"praveen",
        phone:941191203
        
        },


];

app.get('/',function(req,res){
Contact.find({},function(err,contacts){

    if(err){
        console.log('error');
        return;
    }
    return res.render('home',{
        title:'Todo',
        Contact_list:contacts
    });
});



});
app.post('/contact',function(req,res){
Contact.create({
name:req.body.name,
phone:req.body.phone},
function(err,newContact){
    if(err){
        console.log('err',err);
        return;
    }
console.log('######',newContact);
return res.redirect('back');

});

});



app.get('/delete-contact/',function(req,res){
// console.log(req.query);
// let phone=req.query.phone;

// let contactIndex=Contactlist.findIndex(contact => contact.phone==phone);
// if(contactIndex!=-1){
//     Contactlist.splice(contactIndex,1);
// }
let id=req.query.id;
Contact.findByIdAndDelete(id,function(err){
    if(err){
        console.log('err');
        return;
    }

return res.redirect('back');
});
});
app.listen(port,function(err){
if(err){
    console.log('error',err);
    
}
console.log('succesfully',port);

});