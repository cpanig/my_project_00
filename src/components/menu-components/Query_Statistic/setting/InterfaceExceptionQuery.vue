<template>
<!--接口异常查询-->
<div class="main-right mt-5">
  <ul class="nav nav-tabs col-sm-12" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="Tracking-tab" data-toggle="tab" href="#Tracking-inner" role="tab" aria-controls="dmg" aria-selected="true">接口异常查询</a>
    </li>
  </ul>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="Tracking-inner" role="tabpanel" aria-labelledby="dmg-tab">
        <form class="mt-5 ml-2">
              <div class="form-group row col-sm-12">
                  <label for="formSelect1" class="col-sm-1  form_lab">设备号：</label>
                  <select class="col-md-3 form-control" id="formSelect1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                  </select>
                  <label for="formSelect2" class="col-sm-1  form_lab">异常类型：</label>
                  <select class="col-md-3 form-control" id="formSelect2">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                  </select>
              </div>
              <div class="form-group row col-sm-12">
                  <label for="formInput1" class="col-md-1  form_lab">时间：</label>
                  <input class="col-md-3 form-control" id="formInput1" type="datetime-local">
                  <div class="col-md-2  form_lab mt-2">
                      <input type="checkbox">查询该月
                  </div>
                  <div class="col-md-2  form_lab mt-2">
                      <input type="checkbox">只列出未被确认的异常
                  </div>
              </div>
              <div class="col-md-10 text-center">
                  <button type="button" class="btn btn-primary">查询</button>
              </div>
          <table class="col-md-10 table table-hover mt-5">
              <tbody><tr>
                  <th>序号</th>
                  <th>设备编号</th>
                  <th>异常类型</th>
                  <th>开始时间</th>
                  <th>结束时间</th>
                  <th>最后一次异常时间</th>
                  <th>确认</th>
              </tr>
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><button>确认</button></td>
              </tr>
          </tbody></table>
          <div class="col-md-10 text-center">
              <p>无任何异常！</p>
              <button type="button" class="btn btn-primary">确人所有异常</button>
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
