<template>
<!-- 考勤转移 -->
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">员工考勤转移</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="Tracking-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2 row">
              <div class="form-group row col-sm-12">
                <label class="col-md-2 ">转移考勤的时间：</label>
                <input class="form-control col-md-4" type="datetime-local">
                <div class="col-md-2">
                    <input type="checkbox" checked="">
                    <label for="">转移该月全部</label>
                </div>
                <div class="col-md-3">
                    <input type="checkbox">
                    <label for="">同时转移员工的轨迹</label>
                </div>
              </div>
          <div class="form-group row col-sm-12">
              <label class="col-md-2 ">员工考勤从卡号：</label>
              <input class="form-control col-md-4" type="text">
              <label class="col-md-2" >转移至</label>
              <input class="form-control col-md-4" type="text">
          </div>
          <div class="form-group common-button offset-5">
              <button type="button" class="btn btn-primary">确定</button>
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
