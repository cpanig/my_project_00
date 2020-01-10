<template>
<!--限制区域人员查询-->
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">部门日考勤管理</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="Tracking-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
              <div class="form-group row d-flex align-items-center">
                  <label for="formSelect1" class="col-md-1 text-right form_lab">部门名称：</label>
                  <select class="col-md-4 form-control" id="formSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                  </select>
                  <div class="col-md-4">
                      <input type="checkbox">列出员工细节
                  </div>
              </div>
              <div class="form-group row d-flex align-items-center">
                  <label for="formSelect1" class="col-md-1 text-right form_lab">工种：</label>
                  <select class="col-md-4 form-control" id="formSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                  </select>
                  <div class="col-md-2">
                      <input type="checkbox">使用自定义条件
                  </div>
                  <div class="col-md-2">
                      <input type="checkbox">统计人数
                  </div>
              </div>
              <div class="col-md-10 text-center">
                  <button type="button" class="btn btn-secondary mr-1">重新选择条件</button>
                  <button type="button" class="btn btn-primary">查询</button>
              </div>
          <table class="col-md-10 table table-hover mt-5">
              <tbody><tr>
                  <th>序号</th>
                  <th>编号</th>
                  <th>卡号</th>
                  <th>姓名</th>
                  <th>部门</th>
                  <th>当前位置</th>
                  <th>下井时间</th>
                  <th>在此停留</th>
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
