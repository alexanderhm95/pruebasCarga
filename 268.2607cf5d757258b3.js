"use strict";(self.webpackChunkPanelSG=self.webpackChunkPanelSG||[]).push([[268],{1268:(O,m,l)=>{l.r(m),l.d(m,{InstitucionesModule:()=>d});var f=l(6895),c=l(668),e=l(433);class x{constructor(){this.form=new e.cw({nombreInstitucion:new e.NI("",[e.kI.required,e.kI.minLength(3)]),dirInstitucion:new e.NI("",[e.kI.required,e.kI.minLength(3)]),telInstitucion:new e.NI("",[e.kI.required,e.kI.minLength(6),e.kI.maxLength(10)]),emailInstitucion:new e.NI("",[e.kI.required,e.kI.email]),tipoInstitucion:new e.NI("",[e.kI.required])})}}var t=l(8256),p=l(9456);class g{constructor(n,o,r){this.serviceIntitucion=n,this.router=o,this.route=r,this.formInstitucion=new x}ngOnInit(){this.formInstitucion.form.reset(),this.id=this.route.snapshot.paramMap.get("id"),this.getInstitution()}getInstitution(){this.serviceIntitucion.getInstitution(this.id).subscribe(n=>{this.institucion=n,this.setValues(this.institucion)},n=>{console.log(n)})}setValues(n){this.formInstitucion.form.setValue({nombreInstitucion:n.nameInstitution,dirInstitucion:n.addressInstitution,telInstitucion:n.phoneInstitution,emailInstitucion:n.emailInstitution,tipoInstitucion:n.typeInstitution}),this.formInstitucion.form.markAllAsTouched()}update(){this.institucion={nameInstitution:this.formInstitucion.form.value.nombreInstitucion,addressInstitution:this.formInstitucion.form.value.dirInstitucion,phoneInstitution:this.formInstitucion.form.value.telInstitucion,emailInstitution:this.formInstitucion.form.value.emailInstitucion,typeInstitution:this.formInstitucion.form.value.tipoInstitucion},this.serviceIntitucion.updateInstitution(this.id,this.institucion).subscribe(n=>{this.router.navigate(["../../listar"],{relativeTo:this.route})},n=>{console.log(n)})}}function h(i,n){if(1&i){const o=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td",11)(12,"button",12),t._uU(13," Editar "),t.qZA(),t.TgZ(14,"button",13),t.NdJ("click",function(){const _=t.CHM(o).$implicit,C=t.oxw();return t.KtG(C.deleteInstitution(_._id))}),t._uU(15," Eliminar "),t.qZA()()()}if(2&i){const o=n.$implicit;t.xp6(2),t.Oqu(o.nameInstitution),t.xp6(2),t.Oqu(o.addressInstitution),t.xp6(2),t.Oqu(o.typeInstitution),t.xp6(2),t.Oqu(o.phoneInstitution),t.xp6(2),t.Oqu(o.emailInstitution),t.xp6(2),t.Q6J("routerLink","../editar/"+o._id)}}g.\u0275fac=function(n){return new(n||g)(t.Y36(p.b),t.Y36(c.F0),t.Y36(c.gz))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-editar-institucion"]],decls:51,vars:2,consts:[[1,"contenedor"],[1,"body"],[1,"tittle"],[3,"formGroup","ngSubmit"],[1,"subtitulo"],[1,"form-group"],[1,"labels"],["for","name"],[1,"inputs"],["type","text","id","name","formControlName","nombreInstitucion","placeholder","Ingrese el nombre de la instituci\xf3n",1,"form-control"],["for","dir"],["type","text","id","dir","formControlName","dirInstitucion","placeholder","Ingrese la direcci\xf3n",1,"form-control"],["for","telefo"],["type","text","id","telefo","formControlName","telInstitucion","placeholder","Ingrese el numero de telefono",1,"form-control"],["for","email"],["type","email","id","email","formControlName","emailInstitucion","placeholder","Ingrese el correo..",1,"form-control"],["for","opcion"],["id","opcion","name","opci\xf3n","formControlName","tipoInstitucion",1,"form-control"],["value","0"],["value","PUBLIC"],["value","PRIVATE"],["value","OTHER"],[1,"buttons"],["type","submit",1,"btnEnviar",3,"disabled"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),t._uU(4,"Registrar Instituci\xf3n"),t.qZA()(),t.TgZ(5,"form",3),t.NdJ("ngSubmit",function(){return o.update()}),t.TgZ(6,"fieldset")(7,"div",4),t._uU(8,"Datos de la instituci\xf3n "),t.qZA(),t.TgZ(9,"div",5)(10,"div",6)(11,"label",7),t._uU(12,"Ingrese el nombre de la instituci\xf3n:"),t.qZA()(),t.TgZ(13,"div",8),t._UZ(14,"input",9),t.qZA()(),t.TgZ(15,"div",5)(16,"div",6)(17,"label",10),t._uU(18,"Ingrese la direcci\xf3n:"),t.qZA()(),t.TgZ(19,"div",8),t._UZ(20,"input",11),t.qZA()(),t.TgZ(21,"div",5)(22,"div",6)(23,"label",12),t._uU(24,"Ingrese el numero de telefono:"),t.qZA()(),t.TgZ(25,"div",8),t._UZ(26,"input",13),t.qZA()(),t.TgZ(27,"div",5)(28,"div",6)(29,"label",14),t._uU(30,"Ingrese el correo:"),t.qZA()(),t.TgZ(31,"div",8),t._UZ(32,"input",15),t.qZA()(),t.TgZ(33,"div",5)(34,"div",6)(35,"label",16),t._uU(36,"Ingrese el tipo :"),t.qZA()(),t.TgZ(37,"div",8)(38,"select",17)(39,"option",18),t._uU(40,"Seleccione una opci\xf3n"),t.qZA(),t.TgZ(41,"option",19),t._uU(42,"Privada"),t.qZA(),t.TgZ(43,"option",20),t._uU(44,"Publica"),t.qZA(),t.TgZ(45,"option",21),t._uU(46,"Otra"),t.qZA()()()(),t.TgZ(47,"div",5)(48,"div",22)(49,"button",23),t._uU(50,"Editar"),t.qZA()()()()()()()),2&n&&(t.xp6(5),t.Q6J("formGroup",o.formInstitucion.form),t.xp6(44),t.Q6J("disabled",o.formInstitucion.form.invalid))},dependencies:[e._Y,e.YN,e.Kr,e.Fj,e.EJ,e.JJ,e.JL,e.sg,e.u],styles:["[_ngcontent-%COMP%]:root{--cameo: #D8B393;--nile-blue: #1A3A4D;--camelot: #892F50;--paarl: #AD642E}*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{margin:0;font-family:Roboto,Helvetica Neue,sans-serif}select.ng-valid.ng-touched[_ngcontent-%COMP%], textarea.ng-valid.ng-touched[_ngcontent-%COMP%], input.ng-valid.ng-touched[_ngcontent-%COMP%]{border:2px solid green!important}select.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%], input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:2px solid red!important}button[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}[_nghost-%COMP%]{display:flex;width:100%;height:100%;flex-direction:column;align-items:center}.contenedor[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column}.body[_ngcontent-%COMP%]{width:97%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;border:4px solid var(--paarl);border-radius:10px;margin:0 10px;overflow-y:auto;overflow-x:hidden}.body[_ngcontent-%COMP%]::-webkit-scrollbar{width:15px;background-color:#1a3a4d;border-radius:10px}.body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#892f50;border-radius:10px}.material-icons[_ngcontent-%COMP%]{margin:0;padding:0;font-size:30px}.tittle[_ngcontent-%COMP%]{width:100%;height:10%;display:flex;flex-direction:row;justify-content:center;align-items:center;color:var(--camelot);font-size:36px;line-height:normal;font-weight:600;margin-bottom:10px}.description[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;color:var(--nile-blue);font-size:16px;line-height:normal;font-weight:600}.description[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;color:var(--nile-blue);font-size:16px;line-height:normal;font-weight:400;margin:0 0 0 20px}.btnAccion[_ngcontent-%COMP%]{width:100px;height:40px;display:flex;align-items:center;justify-content:center;background-color:var(--cameo);color:var(--nile-blue);font-size:20px;font-weight:600;padding:10px;border:2px solid var(--camelot);border-radius:10px;cursor:pointer;margin:5px}.btnRegistrar[_ngcontent-%COMP%]{width:100px;height:40px;display:flex;align-items:center;justify-content:center;background-color:var(--cameo);color:var(--nile-blue);font-size:20px;font-weight:600;padding:10px;border:2px solid var(--camelot);border-radius:10px;cursor:pointer}.btnRegistrar[_ngcontent-%COMP%]:hover{background-color:var(--camelot);color:var(--cameo)}form[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:10px}.subtitulo[_ngcontent-%COMP%]{width:100%;height:10%;display:flex;flex-direction:row;justify-content:center;align-items:center;color:var(--camelot);font-size:20px;line-height:normal;border:2px solid var(--camelot);border-radius:10px;font-weight:600;margin:5px 0}.form-group[_ngcontent-%COMP%]{width:100%;color:var(--color-secundario);display:flex;justify-content:left;align-items:flex-start;margin:10px;flex-direction:row}.form-group[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]{width:30%;display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column}.form-group[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px;line-height:normal;font-weight:400;padding-left:10px;color:var(--camelot)}.form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]{width:70%;display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column}.form-group[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:flex-end;flex-direction:column}.form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:70%;color:var(--color-primario);text-align:center;border-radius:5px;border:2px solid var(--camelot)}.form-group[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{width:20px;height:20px;color:var(--color-primario);text-align:center;border-radius:5px}.boton-agregar[_ngcontent-%COMP%]{background-color:#ee4326;color:#fff;padding:8px 12px;border-radius:4px;font-size:14px;text-align:center;transition:background-color .3s ease;text-decoration:none}.btnEnviar[_ngcontent-%COMP%], .btnEliminar[_ngcontent-%COMP%], .btnAgregar[_ngcontent-%COMP%]{width:100px;height:40px;display:flex;align-items:center;justify-content:center;background-color:var(--cameo);color:var(--nile-blue);font-size:20px;font-weight:600;margin:10px;border:2px solid var(--camelot);border-radius:10px;cursor:pointer}.modal[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;position:fixed;top:0;left:0;background-color:#00000080;z-index:100}.modalContainer[_ngcontent-%COMP%]{width:50%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:var(--cameo);border-radius:10px;padding:10px}.labelsModal[_ngcontent-%COMP%]{width:100%;height:90%;display:flex;flex-direction:row;justify-content:center;align-items:center;color:var(--camelot);font-size:20px;line-height:normal;border:2px solid var(--camelot);border-radius:10px;font-weight:600;margin:5px}.inputsModal[_ngcontent-%COMP%]{width:100%;height:90%;display:flex;flex-direction:row;justify-content:center;align-items:center;color:var(--camelot);font-size:20px;line-height:normal;border:2px solid var(--camelot);border-radius:10px;font-weight:600;margin:5px 0}"]});class a{constructor(n,o){this.institucionService=n,this.router=o,this.instituciones=[]}ngOnInit(){this.institucionService.getAllInstitution().subscribe(n=>{const{message:o,institutions:r}=n;this.instituciones=r,console.log(o)})}deleteInstitution(n){this.institucionService.deleteInstitution(n).subscribe(o=>{const{message:r}=o;console.log(r),this.ngOnInit()},o=>{console.log(o)})}}a.\u0275fac=function(n){return new(n||a)(t.Y36(p.b),t.Y36(c.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-listar-institucion"]],decls:25,vars:2,consts:[[1,"contenedor"],[1,"body"],[1,"tittle"],[1,"registrar"],["type","button",1,"btnRegistrar",3,"routerLink"],[1,"table-responsive"],[1,"table","table-striped"],[1,"thead-inverse"],["scope","col"],["scope","col",2,"text-align","center"],[4,"ngFor","ngForOf"],[2,"display","flex","justify-content","space-between"],["type","button",1,"btnAccion",3,"routerLink"],["type","button",1,"btnAccion",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3," Gesti\xf3n de Instituciones "),t.qZA(),t.TgZ(4,"div",3)(5,"button",4),t._uU(6," Registrar "),t.qZA()(),t.TgZ(7,"div",5)(8,"table",6)(9,"thead",7)(10,"tr")(11,"th",8),t._uU(12,"Nombre"),t.qZA(),t.TgZ(13,"th",8),t._uU(14,"Direcci\xf3n"),t.qZA(),t.TgZ(15,"th",8),t._uU(16,"Tipo"),t.qZA(),t.TgZ(17,"th",8),t._uU(18,"Telefono"),t.qZA(),t.TgZ(19,"th",8),t._uU(20,"Correo"),t.qZA(),t.TgZ(21,"th",9),t._uU(22," Acciones"),t.qZA()()(),t.TgZ(23,"tbody"),t.YNc(24,h,16,6,"tr",10),t.qZA()()()()()),2&n&&(t.xp6(5),t.Q6J("routerLink","../registrar"),t.xp6(19),t.Q6J("ngForOf",o.instituciones))},dependencies:[f.sg,c.rH],styles:["[_ngcontent-%COMP%]:root{--cameo: #D8B393;--nile-blue: #1A3A4D;--camelot: #892F50;--paarl: #AD642E}*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{margin:0;font-family:Roboto,Helvetica Neue,sans-serif}select.ng-valid.ng-touched[_ngcontent-%COMP%], textarea.ng-valid.ng-touched[_ngcontent-%COMP%], input.ng-valid.ng-touched[_ngcontent-%COMP%]{border:2px solid green!important}select.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%], input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:2px solid red!important}button[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}[_nghost-%COMP%]{display:flex;width:100%;height:100%;flex-direction:column;align-items:center}.contenedor[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column}.body[_ngcontent-%COMP%]{width:97%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;border:4px solid var(--paarl);border-radius:10px;margin:0 10px;overflow-y:auto;overflow-x:hidden}.body[_ngcontent-%COMP%]::-webkit-scrollbar{width:15px;background-color:#1a3a4d;border-radius:10px}.body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#892f50;border-radius:10px}.material-icons[_ngcontent-%COMP%]{margin:0;padding:0;font-size:30px}.tittle[_ngcontent-%COMP%]{width:100%;height:10%;display:flex;flex-direction:row;justify-content:center;align-items:center;color:var(--camelot);font-size:36px;line-height:normal;font-weight:600;margin-bottom:10px}.description[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;color:var(--nile-blue);font-size:16px;line-height:normal;font-weight:600}.description[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;color:var(--nile-blue);font-size:16px;line-height:normal;font-weight:400;margin:0 0 0 20px}.btnAccion[_ngcontent-%COMP%]{width:100px;height:40px;display:flex;align-items:center;justify-content:center;background-color:var(--cameo);color:var(--nile-blue);font-size:20px;font-weight:600;padding:10px;border:2px solid var(--camelot);border-radius:10px;cursor:pointer;margin:5px}.btnRegistrar[_ngcontent-%COMP%]{width:100px;height:40px;display:flex;align-items:center;justify-content:center;background-color:var(--cameo);color:var(--nile-blue);font-size:20px;font-weight:600;padding:10px;border:2px solid var(--camelot);border-radius:10px;cursor:pointer}.btnRegistrar[_ngcontent-%COMP%]:hover{background-color:var(--camelot);color:var(--cameo)}form[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:10px}.subtitulo[_ngcontent-%COMP%]{width:100%;height:10%;display:flex;flex-direction:row;justify-content:center;align-items:center;color:var(--camelot);font-size:20px;line-height:normal;border:2px solid var(--camelot);border-radius:10px;font-weight:600;margin:5px 0}.form-group[_ngcontent-%COMP%]{width:100%;color:var(--color-secundario);display:flex;justify-content:left;align-items:flex-start;margin:10px;flex-direction:row}.form-group[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]{width:30%;display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column}.form-group[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px;line-height:normal;font-weight:400;padding-left:10px;color:var(--camelot)}.form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]{width:70%;display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column}.form-group[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:flex-end;flex-direction:column}.form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:70%;color:var(--color-primario);text-align:center;border-radius:5px;border:2px solid var(--camelot)}.form-group[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{width:20px;height:20px;color:var(--color-primario);text-align:center;border-radius:5px}.boton-agregar[_ngcontent-%COMP%]{background-color:#ee4326;color:#fff;padding:8px 12px;border-radius:4px;font-size:14px;text-align:center;transition:background-color .3s ease;text-decoration:none}.btnEnviar[_ngcontent-%COMP%], .btnEliminar[_ngcontent-%COMP%], .btnAgregar[_ngcontent-%COMP%]{width:100px;height:40px;display:flex;align-items:center;justify-content:center;background-color:var(--cameo);color:var(--nile-blue);font-size:20px;font-weight:600;margin:10px;border:2px solid var(--camelot);border-radius:10px;cursor:pointer}.modal[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;position:fixed;top:0;left:0;background-color:#00000080;z-index:100}.modalContainer[_ngcontent-%COMP%]{width:50%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:var(--cameo);border-radius:10px;padding:10px}.labelsModal[_ngcontent-%COMP%]{width:100%;height:90%;display:flex;flex-direction:row;justify-content:center;align-items:center;color:var(--camelot);font-size:20px;line-height:normal;border:2px solid var(--camelot);border-radius:10px;font-weight:600;margin:5px}.inputsModal[_ngcontent-%COMP%]{width:100%;height:90%;display:flex;flex-direction:row;justify-content:center;align-items:center;color:var(--camelot);font-size:20px;line-height:normal;border:2px solid var(--camelot);border-radius:10px;font-weight:600;margin:5px 0}.registrar[_ngcontent-%COMP%]{width:100%;height:10%;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-end;padding-left:10px}"]});class u{constructor(n,o,r){this.serviceIntitucion=n,this.router=o,this.route=r,this.formInstitucion=new x}ngOnInit(){this.formInstitucion.form.reset()}create(){this.institucion={nameInstitution:this.formInstitucion.form.value.nombreInstitucion,addressInstitution:this.formInstitucion.form.value.dirInstitucion,phoneInstitution:this.formInstitucion.form.value.telInstitucion,emailInstitution:this.formInstitucion.form.value.emailInstitucion,typeInstitution:this.formInstitucion.form.value.tipoInstitucion},this.serviceIntitucion.createInstitution(this.institucion).subscribe(n=>{this.router.navigate(["../listar"],{relativeTo:this.route})},n=>{console.log(n)})}}u.\u0275fac=function(n){return new(n||u)(t.Y36(p.b),t.Y36(c.F0),t.Y36(c.gz))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-registrar-institucion"]],decls:51,vars:2,consts:[[1,"contenedor"],[1,"body"],[1,"tittle"],[3,"formGroup","ngSubmit"],[1,"subtitulo"],[1,"form-group"],[1,"labels"],["for","name"],[1,"inputs"],["type","text","id","name","formControlName","nombreInstitucion","placeholder","Ingrese el nombre de la instituci\xf3n",1,"form-control"],["for","dir"],["type","text","id","dir","formControlName","dirInstitucion","placeholder","Ingrese la direcci\xf3n",1,"form-control"],["for","telefo"],["type","text","id","telefo","formControlName","telInstitucion","placeholder","Ingrese el numero de telefono",1,"form-control"],["for","email"],["type","email","id","email","formControlName","emailInstitucion","placeholder","Ingrese el correo..",1,"form-control"],["for","opcion"],["id","opcion","name","opci\xf3n","formControlName","tipoInstitucion",1,"form-control"],["value","0"],["value","PUBLIC"],["value","PRIVATE"],["value","OTHER"],[1,"buttons"],["type","submit",1,"btnEnviar",3,"disabled"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),t._uU(4,"Registrar Instituci\xf3n"),t.qZA()(),t.TgZ(5,"form",3),t.NdJ("ngSubmit",function(){return o.create()}),t.TgZ(6,"fieldset")(7,"div",4),t._uU(8,"Datos de la instituci\xf3n "),t.qZA(),t.TgZ(9,"div",5)(10,"div",6)(11,"label",7),t._uU(12,"Ingrese el nombre de la instituci\xf3n:"),t.qZA()(),t.TgZ(13,"div",8),t._UZ(14,"input",9),t.qZA()(),t.TgZ(15,"div",5)(16,"div",6)(17,"label",10),t._uU(18,"Ingrese la direcci\xf3n:"),t.qZA()(),t.TgZ(19,"div",8),t._UZ(20,"input",11),t.qZA()(),t.TgZ(21,"div",5)(22,"div",6)(23,"label",12),t._uU(24,"Ingrese el numero de telefono:"),t.qZA()(),t.TgZ(25,"div",8),t._UZ(26,"input",13),t.qZA()(),t.TgZ(27,"div",5)(28,"div",6)(29,"label",14),t._uU(30,"Ingrese el correo:"),t.qZA()(),t.TgZ(31,"div",8),t._UZ(32,"input",15),t.qZA()(),t.TgZ(33,"div",5)(34,"div",6)(35,"label",16),t._uU(36,"Ingrese el tipo :"),t.qZA()(),t.TgZ(37,"div",8)(38,"select",17)(39,"option",18),t._uU(40,"Seleccione una opci\xf3n"),t.qZA(),t.TgZ(41,"option",19),t._uU(42,"Privada"),t.qZA(),t.TgZ(43,"option",20),t._uU(44,"Publica"),t.qZA(),t.TgZ(45,"option",21),t._uU(46,"Otra"),t.qZA()()()(),t.TgZ(47,"div",5)(48,"div",22)(49,"button",23),t._uU(50,"Registrar"),t.qZA()()()()()()()),2&n&&(t.xp6(5),t.Q6J("formGroup",o.formInstitucion.form),t.xp6(44),t.Q6J("disabled",o.formInstitucion.form.invalid))},dependencies:[e._Y,e.YN,e.Kr,e.Fj,e.EJ,e.JJ,e.JL,e.sg,e.u],styles:["[_ngcontent-%COMP%]:root{--cameo: #D8B393;--nile-blue: #1A3A4D;--camelot: #892F50;--paarl: #AD642E}*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{margin:0;font-family:Roboto,Helvetica Neue,sans-serif}select.ng-valid.ng-touched[_ngcontent-%COMP%], textarea.ng-valid.ng-touched[_ngcontent-%COMP%], input.ng-valid.ng-touched[_ngcontent-%COMP%]{border:2px solid green!important}select.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%], input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:2px solid red!important}button[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}[_nghost-%COMP%]{display:flex;width:100%;height:100%;flex-direction:column;align-items:center}.contenedor[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column}.body[_ngcontent-%COMP%]{width:97%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;border:4px solid var(--paarl);border-radius:10px;margin:0 10px;overflow-y:auto;overflow-x:hidden}.body[_ngcontent-%COMP%]::-webkit-scrollbar{width:15px;background-color:#1a3a4d;border-radius:10px}.body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#892f50;border-radius:10px}.material-icons[_ngcontent-%COMP%]{margin:0;padding:0;font-size:30px}.tittle[_ngcontent-%COMP%]{width:100%;height:10%;display:flex;flex-direction:row;justify-content:center;align-items:center;color:var(--camelot);font-size:36px;line-height:normal;font-weight:600;margin-bottom:10px}.description[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;color:var(--nile-blue);font-size:16px;line-height:normal;font-weight:600}.description[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;color:var(--nile-blue);font-size:16px;line-height:normal;font-weight:400;margin:0 0 0 20px}.btnAccion[_ngcontent-%COMP%]{width:100px;height:40px;display:flex;align-items:center;justify-content:center;background-color:var(--cameo);color:var(--nile-blue);font-size:20px;font-weight:600;padding:10px;border:2px solid var(--camelot);border-radius:10px;cursor:pointer;margin:5px}.btnRegistrar[_ngcontent-%COMP%]{width:100px;height:40px;display:flex;align-items:center;justify-content:center;background-color:var(--cameo);color:var(--nile-blue);font-size:20px;font-weight:600;padding:10px;border:2px solid var(--camelot);border-radius:10px;cursor:pointer}.btnRegistrar[_ngcontent-%COMP%]:hover{background-color:var(--camelot);color:var(--cameo)}form[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:10px}.subtitulo[_ngcontent-%COMP%]{width:100%;height:10%;display:flex;flex-direction:row;justify-content:center;align-items:center;color:var(--camelot);font-size:20px;line-height:normal;border:2px solid var(--camelot);border-radius:10px;font-weight:600;margin:5px 0}.form-group[_ngcontent-%COMP%]{width:100%;color:var(--color-secundario);display:flex;justify-content:left;align-items:flex-start;margin:10px;flex-direction:row}.form-group[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]{width:30%;display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column}.form-group[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px;line-height:normal;font-weight:400;padding-left:10px;color:var(--camelot)}.form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]{width:70%;display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column}.form-group[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:flex-end;flex-direction:column}.form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:70%;color:var(--color-primario);text-align:center;border-radius:5px;border:2px solid var(--camelot)}.form-group[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{width:20px;height:20px;color:var(--color-primario);text-align:center;border-radius:5px}.boton-agregar[_ngcontent-%COMP%]{background-color:#ee4326;color:#fff;padding:8px 12px;border-radius:4px;font-size:14px;text-align:center;transition:background-color .3s ease;text-decoration:none}.btnEnviar[_ngcontent-%COMP%], .btnEliminar[_ngcontent-%COMP%], .btnAgregar[_ngcontent-%COMP%]{width:100px;height:40px;display:flex;align-items:center;justify-content:center;background-color:var(--cameo);color:var(--nile-blue);font-size:20px;font-weight:600;margin:10px;border:2px solid var(--camelot);border-radius:10px;cursor:pointer}.modal[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;position:fixed;top:0;left:0;background-color:#00000080;z-index:100}.modalContainer[_ngcontent-%COMP%]{width:50%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:var(--cameo);border-radius:10px;padding:10px}.labelsModal[_ngcontent-%COMP%]{width:100%;height:90%;display:flex;flex-direction:row;justify-content:center;align-items:center;color:var(--camelot);font-size:20px;line-height:normal;border:2px solid var(--camelot);border-radius:10px;font-weight:600;margin:5px}.inputsModal[_ngcontent-%COMP%]{width:100%;height:90%;display:flex;flex-direction:row;justify-content:center;align-items:center;color:var(--camelot);font-size:20px;line-height:normal;border:2px solid var(--camelot);border-radius:10px;font-weight:600;margin:5px 0}"]});const b=[{path:"",component:a,pathMatch:"full"},{path:"listar",component:a},{path:"registrar",component:u},{path:"editar/:id",component:g}];class s{}s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[c.Bz.forChild(b),c.Bz]});class d{}d.\u0275fac=function(n){return new(n||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[f.ez,s,e.UX]})}}]);