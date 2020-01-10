<template>
<!-- 修改密码 -->
<div class="main-right mt-5">
<!-- 顶部菜单 -->
     <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
       <li class="nav-item">
         <a class="nav-link active" id="ChangePsw-tab" data-toggle="tab" href="#ChangePsw-inner" role="tab" aria-controls="home" aria-selected="true">修改密码</a>
       </li>
     </ul>
<!-- 底部列表 -->
     <div class="tab-content" id="myTabContent">
       <div class="tab-pane fade show active" id="ChangePsw-inner" role="tabpanel" aria-labelledby="home-tab">
         <form class="mt-4 ml-3 row">
           <div class="form-group col-sm-12 d-flex">
             <label for="oldPwd" class="col-form-label col-sm-2">旧密码：</label>
             <div class="col-sm-9 ml-5">
               <input  class="form-control" id="oldPwd">
             </div>
           </div>
           <div class="form-group col-sm-12 d-flex">
             <label for="newPwd" class="col-form-label col-sm-2">新密码：</label>
             <div class="col-sm-9 ml-5">
               <input  class="form-control" id="oldPwd">
             </div>
           </div>
           <div class="form-group col-sm-12 d-flex ">
             <label for="insPwd" class="col-form-label col-sm-2">密码确认:</label>
             <div class="col-sm-9 ml-5">
               <input  class="form-control" id="oldPwd">
             </div>
           </div>
           <div class="d-flex col-sm-12 justify-content-center">
             <button type="submit" class="btn btn-primary">修改</button>
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
