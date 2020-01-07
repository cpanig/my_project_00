<template>
<div class="main-right mt-5">
     <ul class="nav nav-tabs" id="myTab" role="tablist">
       <li class="nav-item">
         <a class="nav-link active" id="ChangePsw-tab" data-toggle="tab" href="#ChangePsw-inner" role="tab" aria-controls="home" aria-selected="true">修改密码</a>
       </li>
     </ul>
     <div class="tab-content" id="myTabContent">
       <div class="tab-pane fade show active" id="ChangePsw-inner" role="tabpanel" aria-labelledby="home-tab">
         <form class="mt-4 ml-3">
           <div class="form-group d-flex align-items-center ">
             <label for="oldPwd" class="<col-sm-2></col-sm-1> col-form-label mr-5">旧密码：</label>
             <div class="col-sm-9 ml-5">
               <input  class="form-control" id="oldPwd">
             </div>
           </div>
           <div class="form-group d-flex align-items-center ">
             <label for="oldPwd" class="<col-sm-2></col-sm-1> col-form-label mr-5">新密码：</label>
             <div class="col-sm-9 ml-5">
               <input  class="form-control" id="oldPwd">
             </div>
           </div>
           <div class="form-group d-flex align-items-center ">
             <label for="oldPwd" class="<col-sm-2></col-sm-1> col-form-label mr-5">密码确认:</label>
             <div class="col-sm-9 ml-5">
               <input  class="form-control" id="oldPwd">
             </div>
           </div>
           <div class="form-group row">
             <div class="col-sm-1 offset-5">
               <button type="submit" class="btn btn-primary">修改</button>
             </div>
           </div>
         </form>
       </div>
     </div>
  </div>
</template>

<script>
</script>

<style>
  h1{
    color: wheat;
  }
</style>
