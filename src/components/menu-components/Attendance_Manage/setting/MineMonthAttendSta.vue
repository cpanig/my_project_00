<template>
<!-- 全矿月考勤统计 -->
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">全矿月考勤统计</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="Tracking-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
              <div class="form-group row">
                  <label for="formInput1" class="col-md-1 form_lab ">统计时间：</label>
                  <input class="col-md-4 form-control" id="formInput1" type="date">
                  <div class="col-md-2 form_lab ">
                      <input class="form_lab" type="checkbox">列出部门细节
                  </div>
                  <div class="col-md-2 form_lab">
                      <input class="form_lab" type="checkbox">列出每日细节
                  </div>
                  <div class="col-md-1 ">
                      <button type="button" class="btn btn-primary">确定</button>
                  </div>
              </div>
          <table class="table table-hover">
              <tbody><tr>
                  <th>部门名称</th>
                  <th>早班</th>
                  <th>中班</th>
                  <th>晚班</th>
                  <th>夜班</th>
                  <th>入井合计人数</th>
                  <th>入井合计次数</th>
                  <th>班次合计人数</th>
                  <th>班次合计次数</th>
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
              <tr>
                  <td>备注</td>
                  <td colspan="8"></td>
              </tr>
          </tbody></table>
          <div class="text-center">
              <button type="button" class="btn btn-primary">导出Excel</button>
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
