<template>
<!--  干部月考勤统计 -->
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">干部月考勤统计</a>
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
                  <label for="formSelect2" class="col-md-1  form_lab">级别：</label>
                  <select class="col-md-4 form-control" id="formSelect2">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                  </select>
              </div>
              <div class="form-group row">
                  <label for="formSelect5" class="col-md-1  form_lab">下井分站：</label>
                  <select class="col-md-4 form-control" id="formSelect5">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                  </select>
                  <label for="formSelect6" class="col-md-1  form_lab">上井分站：</label>
                  <select class="col-md-4 form-control" id="formSelect6">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                  </select>
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
              <div class="form-group row col-sm-12 ml-1">
                  <input class="form-check-input" type="checkbox" value="">
                  <label class="form-check-label" for="defaultCheck2">列出未下井干部</label>
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
                  <th>职务</th>
                  <th>早</th>
                  <th>中</th>
                  <th>晚</th>
                  <th>夜</th>
                  <th>未</th>
                  <th>总</th>
                  <th>工</th>
                  <th>加</th>
                  <th>津贴</th>
                  <th>总计</th>
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
