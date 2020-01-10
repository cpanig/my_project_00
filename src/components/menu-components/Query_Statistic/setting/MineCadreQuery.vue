<template>
<!--井下跟班干部查询-->
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">井下跟班干部查询</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="Tracking-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
              <div class="form-group row ccl-sm-12">
                  <label for="formSelect1" class="col-md-1  form_lab">部门名称：</label>
                  <select class="col-sm-3 form-control" id="formSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                  </select>
                  <label for="formInput1" class="col-md-1  form_lab" >班次：</label>
                  <input class="col-md-3 form-control" id="formInput1" type="text">
              </div>
              <div class="col-sm-12 offset-4">
                  <button type="button" class="btn btn-primary">查询</button>
              </div>
          <table class="col-md-10 table table-hover mt-5">
              <tbody><tr>
                  <th>序号</th>
                  <th>编号</th>
                  <th>卡号</th>
                  <th>姓名</th>
                  <th>部门</th>
                  <th>职务</th>
                  <th>当前位置</th>
                  <th>下井时间</th>
                  <th>到达时间</th>
              </tr>
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
          </tbody></table>
          <div class="col-md-10 text-center">
              <button type="button" class="btn btn-primary mr-1">导出Excel</button>
              <button type="button" class="btn btn-primary">打印</button>
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
