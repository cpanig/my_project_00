<template>
<!--上下井人数查询-->
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">上下井人数查询</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="Tracking-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
              <div class="form-group row">
                  <label for="formSelect1" class="col-md-1  form_lab">部门：</label>
                  <select class="col-md-3 form-control" id="formSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                  </select>
                  <label for="formSelect2" class="col-md-1  form_lab" style="margin-left: 5%">时长：</label>
                  <select class="col-md-3 form-control" id="formSelect2">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                  </select>
              </div>
              <div class="form-group row">
                  <label for="formInput1" class="col-md-1  form_lab">开始时间：</label>
                  <input class="col-md-3 form-control" id="formInput1" type="datetime-local">
                  <label for="formInput2" class="col-md-1  form_lab" style="margin-left: 5%">结束时间：</label>
                  <input class="col-md-3 form-control" id="formInput2" type="datetime-local">
              </div>
              <div class="form-group text-center row">
                  <div class="col-md-3 form_lab">
                      <input type="checkbox">&nbsp;&nbsp;统计改时间段下井人数
                  </div>
                  <div class="col-md-3 form_lab">
                      <input type="checkbox">&nbsp;&nbsp;统计改时间段上井人数
                  </div>
                  <div class="col-md-2 form_lab">
                      <input type="checkbox">&nbsp;&nbsp;统计人数
                  </div>
              </div>
              <div class="col-md-10 text-center" style="margin-bottom: 2%;">
                  <button type="button" class="btn btn-primary">查询</button>
              </div>
          <table class="col-md-10 table table-hover">
              <tbody><tr>
                  <th>部门</th>
                  <th>开始时间</th>
                  <th>结束时间</th>
                  <th>时长</th>
              </tr>
              <tr>
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
