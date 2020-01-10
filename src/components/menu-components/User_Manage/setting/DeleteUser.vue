<template>
<!-- 删除用户信息 -->
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Deleteuser-tab" data-toggle="tab" href="#Deleteuser-inner" role="tab" aria-controls="dmg" aria-selected="true">删除用户</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="Tracking-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form>
            <span>请输入你准备删除的用户名称</span>
            <div class="form-group col-sm-12 row p-0 mt-2">
              <label for="oldPwd" class="col-form-label col-sm-2">用户名称：</label>
              <div class="form-group row col-sm-12 ml-0">
                <input  class="form-control" >
              </div>
            </div>
            <div class="d-flex col-sm-12 justify-content-center">
              <button type="submit" class="btn btn-primary">确定</button>
            </div>
        </form>
      </div>
    </div>
</div>

</template>

<script>
</script>

<style>
</style>
