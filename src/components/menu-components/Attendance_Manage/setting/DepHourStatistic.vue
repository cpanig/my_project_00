<template>
<!--  部门工时统计  -->
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">部门工时统计</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="Tracking-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
              <div class="form-group row">
                  <label for="formSelect1" class="col-md-1  form_lab">部门：</label>
                  <select class="col-md-4 form-control" id="formSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                  </select>
                  <div class="col-md-4 form_lab">
                      <input type="checkbox">&nbsp;&nbsp;列出未下井员工
                  </div>
              </div>
              <div class="form-group row">
                  <label for="formSelect5" class="col-md-1  form_lab">开始时间：</label>
                  <div class="col-md-4">
                      <input type="datetime-local" class="form-control">
                  </div>
                  <label for="formSelect6" class="col-md-1  form_lab">结束时间：</label>
                  <div class="col-md-4">
                      <input type="datetime-local" class="form-control">
                  </div>
              </div>
              <div class="common-button">
                  <button type="button" class="btn btn-primary">查询</button>
              </div>
              <table class="table table-hover">
              <tbody><tr>
                  <th>序号</th>
                  <th>工号</th>
                  <th>卡号</th>
                  <th>姓名</th>
                  <th>部门</th>
                  <th>职务</th>
              </tr>
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
          </tbody></table>
          <div class="text-center">
              <button type="button" class="btn btn-primary mr-1">导出Excel</button>
              <button type="button" class="btn btn-primary ">打印</button>
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
