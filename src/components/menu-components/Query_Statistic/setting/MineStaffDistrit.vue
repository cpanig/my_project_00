<template>
<!-- 矿井员工分布 -->
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">矿井员工分布</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="Tracking-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
          <div class="tab-pane fade active show" id="departDay">  <!--矿井员工分布-->
              <form action="" style="padding-top: 2%;">
                  <div class="form-group row">
                      <div class="col-md-3 form_lab">
                          <input type="checkbox">&nbsp;&nbsp;列出区域细节
                      </div>
                      <div class="col-md-3 form_lab">
                          <input type="checkbox">&nbsp;&nbsp;列出部门细节
                      </div>
                      <div class="col-md-3 form_lab">
                          <input type="checkbox">&nbsp;&nbsp;列出区域中的每个分站细节
                      </div>
                  </div>
                  <div class="form-group row">
                      <label for="formInput1" class="col-md-1 form_lab">开始时间：</label>
                      <input class="col-md-3 form-control" id="formInput1" type="datetime-local">
                      <div class="col-md-4 text-right">
                          <button type="button" class="btn btn-primary">查询</button>
                      </div>
                  </div>
              </form>
              <table class="col-md-10 table table-hover">
                  <tbody><tr>
                      <th>部门</th>
                      <th>时间</th>
                      <th>区域</th>
                  </tr>
                  <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                  </tr>
              </tbody></table>
              <div class="col-md-10 text-center">
                  <button type="button" class="btn btn-primary">导出Excel</button>
                  <button type="button" class="btn btn-primary">打印</button>
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
