<template>
<!-- 新建员工信息 -->
<div class="col-md-9 col-sm-8 col-xs-12 p-5" >
  <form action="#">
      <table class="table table-bordered">
       <tbody><tr>
          <td width="90">卡号：</td>
          <td width="360">
            <input class="form-control" type="text" name="" id="" value="101">
          </td>
          <td width="110">工号：</td>
          <td width="360">
            <input class="form-control" type="text" name="" id="" value="101">
          </td>
          <td rowspan="4" colspan="2">
            <button type="button" class="btn btn-primary offset-5">添加</button>
          </td>
        </tr>
        <tr>
          <td>姓名：</td>
          <td>
            <input class="form-control" type="text" name="" id="" value="失效">
          </td>
          <td>性别：</td>
          <td>
              <select class="form-control selectpicker">
                <option value="volvo">--请选择--</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
               </select>
          </td>
        </tr>
        <tr>
          <td>职称：</td>
          <td>
            <select class="form-control selectpicker">
              <option value="volvo">--请选择--</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </td>
          <td>合同方式：</td>
          <td>
            <select class="form-control selectpicker">
              <option value="volvo">--请选择--</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
          </select>
          </td>
        </tr>
        <tr>
          <td>籍贯：</td>
          <td>
            <select class="form-control selectpicker">
              <option value="volvo">--请选择--</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </td>
          <td>民族：</td>
          <td>
            <select class="form-control selectpicker">
              <option value="volvo">--请选择--</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>部门：</td>
          <td>
            <select class="form-control selectpicker">
              <option value="volvo">待修卡</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
          </select>
          </td>
          <td> 班组：</td>
          <td>
            <select class="form-control selectpicker">
              <option value="volvo">无班组</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
          </select>
          </td>
            <td width="150">规定下井次数：</td>
            <td width="360">
              <input class="form-control" type="text" name="" id="" value="">
            </td>
        </tr>
        <tr>
          <td>工种：</td>
          <td>
            <select class="form-control selectpicker">
              <option value="volvo">----请选择----</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </td>
          <td>职务：</td>
          <td>
            <select class="form-control selectpicker">
              <option value="volvo">----请选择----</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </td>
          <td>规定下井时间：</td>
          <td>
            <div class="input-size">
              <input type="text" class="form-control">
              <span class="size-curr size-position-minute">分钟</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>学历：</td>
          <td>
            <select class="form-control selectpicker">
              <option value="volvo">----请选择----</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </td>
          <td>工时：</td>
          <td>
            <div class="input-size">
              <input type="text" class="form-control">
              <span class="size-position-hour size-curr">小时/工</span>
            </div>
          </td>
          <td>政治面貌：</td>
          <td>
            <select class="form-control selectpicker">
              <option value="volvo">---请选择---</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
          </select>
          </td>
        </tr>
        <tr>
          <td>身高：</td>
          <td>
            <div class="input-size">
              <input type="text" class="form-control">
              <span class="size-position size-curr">cm</span>
            </div>
          </td>
          <td>婚否：</td>
          <td>
            <select class="form-control selectpicker">
              <option value="volvo">----请选择----</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
          </select>
          </td>
          <td>享受津贴级别：</td>
          <td>
             <select class="form-control selectpicker">
                <option value="volvo">---请选择---</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
          </td>
        </tr>
        <tr>
          <td>体重：</td>
          <td>
            <div class="input-size">
              <input type="text" class="form-control">
              <span class="size-position size-curr">kg</span>
            </div>
          </td>
          <td>生日：</td>
          <td>
            <input class="form-control" type="text" name="" id="" value="1995/2/5">
          </td>
          <td>参加工作时间：</td>
          <td>
            <input class="form-control" type="text" name="" id="" value="">
          </td>
        </tr>
        <tr>
          <td>灯号：</td>
          <td>
            <input class="form-control" type="text" name="" id="" value="">
          </td>
          <td colspan="4">&nbsp;</td>
        </tr>
      </tbody></table>
      <div class="btnCenter offset-5">
        <button type="button" class="btn btn-primary mr-1">修改</button>
        <button type="button" class="btn btn-primary">确定</button>
    </div>
  </form>
</div>
</template>

<script>
</script>

<style>
</style>
