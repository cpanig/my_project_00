<template>
 <!--个人月考勤查询-->
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">个人月考勤查询</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="Tracking-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
              <div class="form-group row">
                  <label for="form_Input1" class="col-md-1  form_lab">员工卡号：</label>
                  <input class="col-md-4 form-control" id="form_Input1" type="text">
                  <div class="col-md-1">
                      <button type="button" class="btn btn-primary">选择</button>
                  </div>
              </div>
              <div class="form-group row">
                  <label for="formSelect1" class="col-md-1  form_lab">下井分站：</label>
                  <select class="col-md-4 form-control" id="formSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                  </select>
                  <label for="formSelect2" class="col-md-1  form_lab">上井分站：</label>
                  <select class="col-md-4 form-control" id="formSelect2">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                  </select>
              </div>
              <div class="form-group row">
                  <label for="formSelect3" class="col-md-1  form_lab">开始时间：</label>
                  <input class="col-md-4 form-control" id="formSelect3" type="datetime-local">
                  <label for="formSelect6" class="col-md-1  form_lab">结束时间：</label>
                  <input class="col-md-4 form-control" id="formSelect6" type="datetime-local">
              </div>
              <div class="form-group row">
                  <label class="col-md-1  form_lab">班次：</label>
                  <input class="col-md-4 form-control" type="text">
                  <div class="col-md-1">
                      <button type="button" class="btn btn-primary ">查询</button>
                  </div>
              </div>
          <table class="table table-hover">
              <tbody><tr>
                  <th>卡号：</th>
                  <th>工号：</th>
                  <th>姓名：</th>
                  <th>部门：</th>
                  <th>工种：</th>
                  <th>工时：</th>
              </tr>
              <tr>
                  <th>序号</th>
                  <th>日期</th>
                  <th>下井时间</th>
                  <th>上井时间</th>
                  <th>时长</th>
                  <th>班次</th>
              </tr>
              <tr>
                  <td>123</td>
                  <td>123</td>
                  <td>123</td>
                  <td>123</td>
                  <td>123</td>
                  <td>123</td>
              </tr>
          </tbody></table>
          <div class="text-center">
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
