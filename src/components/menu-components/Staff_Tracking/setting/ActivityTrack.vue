<template>
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Activity-tab" data-toggle="tab" href="#Activity-inner" role="tab" aria-controls="dmg" aria-selected="true">员工活动轨迹</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="Activity-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
      <div class="form-group row d-flex justify-content-md-center">
        <label for="inputEmail8" class="col-form-label col-sm-2">日期：</label>
        <div class="col-sm-4">
          <input type="email" class="form-control" id="inputEmail8">
        </div>
        <label for="inputEmail9" class="col-form-label col-sm-2">员工编号：</label>
        <div class="col-sm-4">
          <input type="email" class="form-control" id="inputEmail9">
        </div>
      </div>
        <div class="row col-sm-12">
          <div class="mr-1 offset-5">
            <button type="submit" class="btn btn-primary">选择</button>
          </div>
          <div>
            <button type="submit" class="btn btn-primary">查询</button>
          </div>
        </div>
        <div class="form-group row mt-4  d-flex align-items-center">
              <div class="col-sm-2">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="allInMine" value="option1">
                  <label class="form-check-label" for="exampleRadios1">最近两天</label> <br>
              </div>
              <div class="col-sm-10 row  d-flex align-items-center">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="dailyInMine" value="option2">
                  <label class="form-check-label" for="exampleRadios2">时间段：</label>
                  <input type="date" class="form-control col-sm-2 mr-2"><span>日--</span>
                  <input type="date" class="form-control col-sm-2 ml-2 mr-2"><span>日</span>
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
</style>
