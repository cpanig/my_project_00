<template>
<!-- 轨迹再现 -->
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">新增</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="Tracking-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class=" ml-2">
          <h5>请在下面输入需要轨迹再现的员工卡号及显示的日期。</h5>
          <div class="form-group col-sm-12 row mt-5">
            <label for="oldPwd" class="col-form-label col-sm-2">再现日期：</label>
              <div class="col-sm-9 ml-5">
                <input  class="form-control"  placeholder="必填">
              </div>
          </div>
          <div class="form-group col-sm-12 row">
            <label for="oldPwd" class="col-form-label col-sm-2">员工卡号：</label>
              <div class="col-sm-9 ml-5">
                <input  class="form-control"  placeholder="必填">
              </div>
          </div>
          <div class="d-flex col-sm-12 justify-content-center">
            <a href="#New-tab-inner" class="btn btn-primary">确定</a>
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
