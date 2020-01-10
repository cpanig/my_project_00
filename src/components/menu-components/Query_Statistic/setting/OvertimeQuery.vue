<template>
<!--超时员工查询-->
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">超时员工查询</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="Tracking-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
              <div class="form-group row">
                  <label for="formSelect1" class="col-md-2  form_lab">下井时间已超过：</label>
                  <select class="col-md-3 form-control" id="formSelect1">
                      <option>1小时</option>
                      <option>2小时</option>
                      <option>3小时</option>
                  </select>
                  <div class="col-md-5 text-center form_lab">
                      <input type="checkbox">&nbsp;&nbsp;不包括当前处于井上分站的员工
                  </div>
              </div>
              <div class="col-md-10 text-center" style="margin: 20px 0;">
                  <button type="button" class="btn btn-primary">查询</button>
              </div>
          <table class="col-md-10 table table-hover">
              <tbody><tr>
                  <th>序号</th>
                  <th>编号</th>
                  <th>卡号</th>
                  <th>姓名</th>
                  <th>部门</th>
                  <th>当前位置</th>
                  <th>下井时间</th>
                  <th>到达时间</th>
                  <th>井下停留</th>
                  <th>当前停留</th>
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
          <div class="col-md-10 text-center">
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
