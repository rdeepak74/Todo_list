const TodoList=require('../models/todolist');
var moment = require('moment');

module.exports.todolist= async function(req,res){
  // TodoList.find({}, function(err,todoList){
  //   if(err){
  //       console.log('Error in fetching contacts from db');
  //       return;
  //       }
  //       return res.render('todolist', {
  //           title: "My Todo list",
  //           Todo_List: todoList
  //       });
  //   });

  const todoall= await TodoList.find();

  res.render('todolist',{
    title: "My Todo list",
   Todo_List: todoall,
   moment:moment
  })
    
}

module.exports.submit= async function(req,res){
    // console.log(req.body);
    // TodoList.create(req.body,function(err,todolist){
    //   if(err){
    //     console.log('errr');
    //     return;
    //   }
    //   return res.redirect('/');
    // })

    
    try{
      const todo= await TodoList.create(req.body); 
      if(todo){
        return res.redirect('/');
      }
    }catch(err){
      console.log(err+"Error occured");
      return res.redirect('/');
    }
//     TodoList.create([{
//         Description:req.body.Description,
//         Category:req.body.Category,
//         duedate:req.body.duedate]
// }, function(err,todolist){
//         console.log('1');
//         if(err){
//             console.log('error in submitting todolist');
//             return;
//         }
        
//     })
//     return res.redirect('/');
// const todo = new TodoList(
//     {
//     Description:req.body.Description,
//         Category:req.body.Category,
//         duedate:req.body.duedate
//   }
// req.body
//   );

  // const todo = new TodoList(req.body);
  // todo.save()
  //   .then(() => {
  //     res.redirect('/');
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.redirect('/');
  //   });
// TodoList.create(req.body, function(err,todolist){
//     if(err){
//         console.log("Not submitted data");
//         return;
//     }
//     res.redirect('/');
// })
// const awesome_instance = new TodoList(req.body);
// TodoList.create(req.body, function (err, awesome_instance) {
//     if (err) return handleError(err);
//     // saved!
//     return res.redirect('/');
//   });
}

module.exports.deletetodo= async function(req,res){
  const id= req.body.selected;

  // const id_detail = id.spilt(',');
  for(let i=0;i<id.length;i++){
    console.log("1");
    try{
      console.log(id[i]);
      const todo = await TodoList.findByIdAndDelete(id[i]);
    }catch(err){
      console.log(err+"Error");
      return;
    } // looping over newsp  to delete all the checked value

}
return res.send("Deleted");
  // console.log(id_detail);
}