<template>
<!--干部日考勤查询-->
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">干部日考勤时间</a>
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
                  <label for="formInput1" class="col-md-1  form_lab">班次：</label>
                  <input class="col-md-4 form-control" id="formInput1" type="text">
              </div>
              <div class="form-group row">
                  <label for="formSelect2" class="col-md-1  form_lab">职务：</label>
                  <select class="col-md-4 form-control" id="formSelect2">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                  </select>
                  <label for="formInput2" class="col-md-1  form_lab">级别：</label>
                  <select class="col-md-1 form-control" id="formSelect2">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                  </select>
                  <input class="col-md-3 form-control" id="formInput3" type="text">
              </div>
              <div class="form-group row">
                  <label for="formSelect3" class="col-md-1  form_lab">下井分站：</label>
                  <select class="col-md-4 form-control" id="formSelect3">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                  </select>
                  <label for="formSelect4" class="col-md-1  form_lab">上井分站：</label>
                  <select class="col-md-4 form-control" id="formSelect4">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                  </select>
              </div>
              <div class="form-group row">
                  <label for="formInput4" class="col-md-1  form_lab">日期：</label>
                  <input class="col-md-4 form-control" id="formInput4" type="date">
                  <div class="col-md-3 form_lab">
                      <input type="checkbox">&nbsp;&nbsp;跟班干部
                  </div>
              </div>
              <div class="common-button">
                  <button type="button" class="btn btn-primary ">查询</button>
              </div>
          <table class="table table-hover">
              <tbody><tr>
                  <th>序号</th>
                  <th>工号</th>
                  <th>卡号</th>
                  <th>姓名</th>
                  <th>部门</th>
                  <th>职务</th>
                  <th>下井时间</th>
                  <th>上井时间</th>
                  <th>时长</th>
                  <th>班次</th>
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
                  <td></td>
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
