"use strict";(self.webpackChunkPanelSG=self.webpackChunkPanelSG||[]).push([[789],{7789:(re,M,a)=>{a.r(M),a.d(M,{CasosModule:()=>f});var g=a(6895),u=a(668),w=a(2340),e=a(8256),P=a(9017),O=a(270);function y(n,i){if(1&n){const o=e.EpF();e.TgZ(0,"div")(1,"button",13),e.NdJ("click",function(){e.CHM(o);const c=e.oxw(2);return e.KtG(c.testTeacher())}),e._uU(2," Por Atender "),e.qZA()()}}function I(n,i){1&n&&(e.TgZ(0,"div")(1,"button",14),e._uU(2," Atendido "),e.qZA()())}function S(n,i){if(1&n&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&n){const o=e.oxw(3);e.xp6(1),e.hij(" ",o.codigo," ")}}function A(n,i){if(1&n){const o=e.EpF();e.TgZ(0,"div")(1,"button",13),e.NdJ("click",function(){e.CHM(o);const c=e.oxw().$implicit,_=e.oxw();return e.KtG(_.testStudent(c.CI))}),e._uU(2," Por Atender "),e.qZA(),e.YNc(3,S,2,1,"div",15),e.qZA()}if(2&n){const o=e.oxw(2);e.xp6(3),e.Q6J("ngIf",o.codigo>0)}}function N(n,i){1&n&&(e.TgZ(0,"div")(1,"button",14),e._uU(2," Atendido "),e.qZA()())}function q(n,i){1&n&&(e.TgZ(0,"div")(1,"div",16),e._uU(2," Sin Completar "),e.qZA()())}function U(n,i){1&n&&(e.TgZ(0,"div")(1,"div",17),e._uU(2," En Progreso "),e.qZA()())}function k(n,i){if(1&n&&(e.TgZ(0,"div")(1,"div",11),e.YNc(2,q,3,0,"div",12),e.YNc(3,U,3,0,"div",12),e.qZA()()),2&n){const o=e.oxw().$implicit;e.xp6(1),e.Q6J("ngSwitch",o.statusTestTeacher),e.xp6(1),e.Q6J("ngSwitchCase","active"),e.xp6(1),e.Q6J("ngSwitchCase","inactive")}}function j(n,i){1&n&&(e.TgZ(0,"div")(1,"div",17),e._uU(2," En Progreso "),e.qZA()())}function J(n,i){1&n&&(e.TgZ(0,"div")(1,"div",18),e._uU(2," Completado "),e.qZA()())}function L(n,i){if(1&n&&(e.TgZ(0,"div")(1,"div",11),e.YNc(2,j,3,0,"div",12),e.YNc(3,J,3,0,"div",12),e.qZA()()),2&n){const o=e.oxw().$implicit;e.xp6(1),e.Q6J("ngSwitch",o.statusTestTeacher),e.xp6(1),e.Q6J("ngSwitchCase","active"),e.xp6(1),e.Q6J("ngSwitchCase","inactive")}}function z(n,i){if(1&n&&(e.TgZ(0,"tr")(1,"td",10)(2,"div"),e._uU(3),e._UZ(4,"br"),e._uU(5),e._UZ(6,"br"),e._uU(7),e.qZA()(),e.TgZ(8,"td",10)(9,"div"),e._uU(10),e._UZ(11,"br"),e._uU(12),e._UZ(13,"br"),e._uU(14),e.qZA()(),e.TgZ(15,"td")(16,"div",11),e.YNc(17,y,3,0,"div",12),e.YNc(18,I,3,0,"div",12),e.qZA()(),e.TgZ(19,"td")(20,"div",11),e.YNc(21,A,4,1,"div",12),e.YNc(22,N,3,0,"div",12),e.qZA()(),e.TgZ(23,"td"),e._uU(24),e.qZA(),e.TgZ(25,"td")(26,"div",11),e.YNc(27,k,4,3,"div",12),e.YNc(28,L,4,3,"div",12),e.qZA()()()),2&n){const o=i.$implicit;e.xp6(3),e.hij(" CI: ",o.CI," "),e.xp6(2),e.hij(" Nombres: ",o.name," "),e.xp6(2),e.hij(" Apellidos: ",o.lastName," "),e.xp6(3),e.hij(" CI: ",o.CIteacher," "),e.xp6(2),e.hij(" Nombres: ",o.nameT," "),e.xp6(2),e.hij(" Apellidos: ",o.lastNameT," "),e.xp6(2),e.Q6J("ngSwitch",o.statusTestTeacher),e.xp6(1),e.Q6J("ngSwitchCase","active"),e.xp6(1),e.Q6J("ngSwitchCase","inactive"),e.xp6(2),e.Q6J("ngSwitch",o.statusTestStudent),e.xp6(1),e.Q6J("ngSwitchCase","active"),e.xp6(1),e.Q6J("ngSwitchCase","inactive"),e.xp6(2),e.hij(" ",o.dateStart," "),e.xp6(2),e.Q6J("ngSwitch",o.statusTestStudent),e.xp6(1),e.Q6J("ngSwitchCase","active"),e.xp6(1),e.Q6J("ngSwitchCase","inactive")}}class p{constructor(i,o,r){this.casoService=i,this.studentService=o,this.router=r,this.api=w.N.api+"/api/1.0",this.casos=[],this.codigo=0}ngOnInit(){this.casoService.getAllCaso().subscribe(i=>{this.casos=i,console.log(i)},i=>{console.log(i)})}testStudent(i){console.log(i),this.studentService.generateCode({CI:i}).subscribe(r=>{const{data:c}=r;this.codigo=c,console.log(c),this.ngOnInit()})}testTeacher(){}}p.\u0275fac=function(i){return new(i||p)(e.Y36(P.z),e.Y36(O.V),e.Y36(u.F0))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-listar"]],decls:25,vars:2,consts:[[1,"contenedor"],[1,"body"],[1,"tittle"],[1,"registrar"],["type","button",1,"btnRegistrar",2,"margin-bottom","10px","margin-top","10px","font-size","20px","width","200px",3,"routerLink"],[1,"table-responsive"],[1,"table","table-striped"],[1,"thead-inverse"],["scope","col"],[4,"ngFor","ngForOf"],[2,"width","50%","word-wrap","break-word"],[3,"ngSwitch"],[4,"ngSwitchCase"],["type","button",1,"btnEditar",2,"font-size","12px",3,"click"],["type","button","disabled","",1,"btnEliminar"],[4,"ngIf"],[2,"color","red","text-decoration","underline"],[2,"color","yellow","text-decoration","underline"],[2,"color","green","text-decoration","underline"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3," Casos "),e.qZA(),e.TgZ(4,"div",3)(5,"button",4),e._uU(6," Registrar Caso "),e.qZA()(),e.TgZ(7,"div",5)(8,"table",6)(9,"thead",7)(10,"tr")(11,"th",8),e._uU(12,"Estudiante"),e.qZA(),e.TgZ(13,"th",8),e._uU(14,"Docente"),e.qZA(),e.TgZ(15,"th",8),e._uU(16,"Test Docente"),e.qZA(),e.TgZ(17,"th",8),e._uU(18,"Test Estudiante"),e.qZA(),e.TgZ(19,"th",8),e._uU(20,"Fecha Inicio"),e.qZA(),e.TgZ(21,"th",8),e._uU(22,"Progreso"),e.qZA()()(),e.TgZ(23,"tbody"),e.YNc(24,z,29,16,"tr",9),e.qZA()()()()()),2&i&&(e.xp6(5),e.Q6J("routerLink","../registrar"),e.xp6(19),e.Q6J("ngForOf",o.casos))},dependencies:[g.sg,g.O5,g.RF,g.n9,u.rH],styles:["[_ngcontent-%COMP%]:root{--cameo: #D8B393;--nile-blue: #1A3A4D;--camelot: #892F50;--paarl: #AD642E}*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{margin:0;font-family:Roboto,Helvetica Neue,sans-serif}select.ng-valid.ng-touched[_ngcontent-%COMP%], textarea.ng-valid.ng-touched[_ngcontent-%COMP%], input.ng-valid.ng-touched[_ngcontent-%COMP%]{border:2px solid green!important}select.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%], input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:2px solid red!important}button[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}[_nghost-%COMP%]{display:flex;width:100%;height:100%;flex-direction:column;align-items:center}.contenedor[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column}.body[_ngcontent-%COMP%]{width:97%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;border:4px solid var(--paarl);border-radius:10px;margin:0 10px;overflow-y:auto;overflow-x:hidden}.body[_ngcontent-%COMP%]::-webkit-scrollbar{width:15px;background-color:#1a3a4d;border-radius:10px}.body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#892f50;border-radius:10px}.material-icons[_ngcontent-%COMP%]{margin:0;padding:0;font-size:30px}.tittle[_ngcontent-%COMP%]{width:100%;height:10%;display:flex;flex-direction:row;justify-content:center;align-items:center;color:var(--camelot);font-size:36px;line-height:normal;font-weight:600;margin-bottom:10px}.description[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;color:var(--nile-blue);font-size:16px;line-height:normal;font-weight:600}.description[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;color:var(--nile-blue);font-size:16px;line-height:normal;font-weight:400;margin:0 0 0 20px}.btnAccion[_ngcontent-%COMP%]{width:100px;height:40px;display:flex;align-items:center;justify-content:center;background-color:var(--cameo);color:var(--nile-blue);font-size:20px;font-weight:600;padding:10px;border:2px solid var(--camelot);border-radius:10px;cursor:pointer;margin:5px}.btnRegistrar[_ngcontent-%COMP%]{width:100px;height:40px;display:flex;align-items:center;justify-content:center;background-color:var(--cameo);color:var(--nile-blue);font-size:20px;font-weight:600;padding:10px;border:2px solid var(--camelot);border-radius:10px;cursor:pointer}.btnRegistrar[_ngcontent-%COMP%]:hover{background-color:var(--camelot);color:var(--cameo)}form[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:10px}.subtitulo[_ngcontent-%COMP%]{width:100%;height:10%;display:flex;flex-direction:row;justify-content:center;align-items:center;color:var(--camelot);font-size:20px;line-height:normal;border:2px solid var(--camelot);border-radius:10px;font-weight:600;margin:5px 0}.form-group[_ngcontent-%COMP%]{width:100%;color:var(--color-secundario);display:flex;justify-content:left;align-items:flex-start;margin:10px;flex-direction:row}.form-group[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]{width:30%;display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column}.form-group[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px;line-height:normal;font-weight:400;padding-left:10px;color:var(--camelot)}.form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]{width:70%;display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column}.form-group[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:flex-end;flex-direction:column}.form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:70%;color:var(--color-primario);text-align:center;border-radius:5px;border:2px solid var(--camelot)}.form-group[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{width:20px;height:20px;color:var(--color-primario);text-align:center;border-radius:5px}.boton-agregar[_ngcontent-%COMP%]{background-color:#ee4326;color:#fff;padding:8px 12px;border-radius:4px;font-size:14px;text-align:center;transition:background-color .3s ease;text-decoration:none}.btnEnviar[_ngcontent-%COMP%], .btnEliminar[_ngcontent-%COMP%], .btnAgregar[_ngcontent-%COMP%]{width:100px;height:40px;display:flex;align-items:center;justify-content:center;background-color:var(--cameo);color:var(--nile-blue);font-size:20px;font-weight:600;margin:10px;border:2px solid var(--camelot);border-radius:10px;cursor:pointer}.modal[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;position:fixed;top:0;left:0;background-color:#00000080;z-index:100}.modalContainer[_ngcontent-%COMP%]{width:50%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:var(--cameo);border-radius:10px;padding:10px}.labelsModal[_ngcontent-%COMP%]{width:100%;height:90%;display:flex;flex-direction:row;justify-content:center;align-items:center;color:var(--camelot);font-size:20px;line-height:normal;border:2px solid var(--camelot);border-radius:10px;font-weight:600;margin:5px}.inputsModal[_ngcontent-%COMP%]{width:100%;height:90%;display:flex;flex-direction:row;justify-content:center;align-items:center;color:var(--camelot);font-size:20px;line-height:normal;border:2px solid var(--camelot);border-radius:10px;font-weight:600;margin:5px 0}.registrar[_ngcontent-%COMP%]{width:100%;height:10%;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-end;padding-left:10px}"]});var t=a(433);class F{constructor(){this.form=new t.cw({ciStudent:new t.NI("",[t.kI.required,t.kI.minLength(10),t.kI.maxLength(10)]),nameStudent:new t.NI("",[t.kI.required,t.kI.minLength(3)]),lastNameStudent:new t.NI("",[t.kI.required,t.kI.minLength(3)]),ageStudent:new t.NI("",[t.kI.required]),addressStudent:new t.NI("",[t.kI.required,t.kI.minLength(20)]),phoneStudent:new t.NI("",[t.kI.required,t.kI.minLength(6),t.kI.maxLength(10)]),emailStudent:new t.NI("",[t.kI.required,t.kI.email]),gradeStudent:new t.NI("",[t.kI.required,t.kI.minLength(1),t.kI.maxLength(2)]),parallelStudent:new t.NI("",[t.kI.required,t.kI.minLength(1),t.kI.maxLength(1)]),selectTeacher:new t.NI("",[]),CISTeacher:new t.NI("",[t.kI.required,t.kI.minLength(10),t.kI.maxLength(10)]),nameTeacher:new t.NI("",[t.kI.required,t.kI.minLength(3)]),lastNameTeacher:new t.NI("",[t.kI.required,t.kI.minLength(3)]),addressTeacher:new t.NI("",[t.kI.required,t.kI.minLength(20)]),phoneTeacher:new t.NI("",[t.kI.required,t.kI.minLength(6),t.kI.maxLength(10)]),emailTeacher:new t.NI("",[t.kI.required,t.kI.email]),passwordTeacher:new t.NI("",[t.kI.required,t.kI.minLength(6),t.kI.maxLength(10)]),institucion:new t.NI("",[t.kI.required,t.kI.minLength(3)])})}}var Y=a(5575),Q=a(4323),R=a(4992),E=a(9456);function D(n,i){if(1&n&&(e.TgZ(0,"option",37),e._uU(1),e.qZA()),2&n){const o=i.$implicit;e.Q6J("value",o.CI),e.xp6(1),e.AsE(" ",o.name," ",o.lastName," ")}}function H(n,i){if(1&n){const o=e.EpF();e.TgZ(0,"div",5)(1,"div",6)(2,"label",33),e._uU(3,"Seleccione el docente:"),e.qZA()(),e.TgZ(4,"div",8)(5,"select",34)(6,"option",29),e._uU(7,"Seleccione el docente"),e.qZA(),e.YNc(8,D,2,3,"option",30),e.qZA(),e.TgZ(9,"div",35)(10,"button",36),e.NdJ("click",function(){e.CHM(o);const c=e.oxw();return e.KtG(c.agregarDocente())}),e._uU(11,"Agregar"),e.qZA()()()()}if(2&n){const o=e.oxw();e.xp6(8),e.Q6J("ngForOf",o.teachers)}}function G(n,i){1&n&&(e.TgZ(0,"div",5)(1,"div",6)(2,"label",38),e._uU(3,"Ingrese el CI del profesor:"),e.qZA()(),e.TgZ(4,"div",8),e._UZ(5,"input",39),e.qZA()())}function B(n,i){1&n&&(e.TgZ(0,"div",5)(1,"div",6)(2,"label",40),e._uU(3,"Ingrese los nombre del profesor:"),e.qZA()(),e.TgZ(4,"div",8),e._UZ(5,"input",41),e.qZA()())}function $(n,i){1&n&&(e.TgZ(0,"div",5)(1,"div",6)(2,"label",42),e._uU(3,"Ingrese los apellido del profesor:"),e.qZA()(),e.TgZ(4,"div",8),e._UZ(5,"input",43),e.qZA()())}function K(n,i){1&n&&(e.TgZ(0,"div",5)(1,"div",6)(2,"label",44),e._uU(3,"Ingrese la direcci\xf3n del profesor:"),e.qZA()(),e.TgZ(4,"div",8),e._UZ(5,"input",45),e.qZA()())}function X(n,i){1&n&&(e.TgZ(0,"div",5)(1,"div",6)(2,"label",46),e._uU(3,"Ingrese el tel\xe9fono del profesor:"),e.qZA()(),e.TgZ(4,"div",8),e._UZ(5,"input",47),e.qZA()())}function V(n,i){1&n&&(e.TgZ(0,"div",5)(1,"div",6)(2,"label",48),e._uU(3,"Ingrese el correo electr\xf3nico del profesor:"),e.qZA()(),e.TgZ(4,"div",8),e._UZ(5,"input",49),e.qZA()())}function W(n,i){1&n&&(e.TgZ(0,"div",5)(1,"div",6)(2,"label",50),e._uU(3,"Ingrese la contrase\xf1a del profesor:"),e.qZA()(),e.TgZ(4,"div",8),e._UZ(5,"input",51),e.qZA()())}function ee(n,i){if(1&n&&(e.TgZ(0,"option",37),e._uU(1),e.qZA()),2&n){const o=i.$implicit;e.Q6J("value",o.nameInstitution),e.xp6(1),e.hij(" ",o.nameInstitution," ")}}class x{constructor(i,o,r,c,_,b,l,s){this.teacherService=i,this.personService=o,this.userService=r,this.studentService=c,this.institucionService=_,this.casoService=b,this.router=l,this.route=s,this.formCaso=new F,this.agregar=!1,this.teachers=[],this.institutions=[]}ngOnInit(){this.formCaso.form.reset(),this.getInstitutions(),this.getTeachers()}create(){const i=this.formCaso.form.value.ciStudent,o=this.formCaso.form.value.CISTeacher,r=this.formCaso.form.value.institucion,_={CI:this.formCaso.form.value.ciStudent,nameInstitution:this.formCaso.form.value.institucion,grade:this.formCaso.form.value.gradeStudent,parallel:this.formCaso.form.value.parallelStudent};if(this.personService.createPersona({name:this.formCaso.form.value.nameStudent,lastName:this.formCaso.form.value.lastNameStudent,address:this.formCaso.form.value.addressStudent,phone:this.formCaso.form.value.phoneStudent,email:this.formCaso.form.value.emailStudent,age:this.formCaso.form.value.ageStudent,CI:i}).subscribe(l=>{this.studentService.createStudent(_).subscribe(h=>{const{message:d}=h;console.log(d)},h=>{console.log(h)});const{message:s}=l;console.log(s)},l=>{console.log(l)}),console.log(this.formCaso.form.value.selectTeacher),1==this.agregar){const s={email:this.formCaso.form.value.emailTeacher,password:this.formCaso.form.value.passwordTeacher,role:"TEACHER"},v={identificacion:o,nameInstitucion:this.formCaso.form.value.institucion};this.personService.createPersona({name:this.formCaso.form.value.nameTeacher,lastName:this.formCaso.form.value.lastNameTeacher,address:this.formCaso.form.value.addressTeacher,age:0,phone:this.formCaso.form.value.phoneTeacher,email:this.formCaso.form.value.emailTeacher,CI:o}).subscribe(d=>{const{message:C}=d;console.log(C),this.userService.createUser(s).subscribe(Z=>{const{message:oe}=Z;console.log(oe),this.teacherService.createTeacher(v).subscribe(T=>{const{message:ie}=T;console.log(ie)},T=>{console.log(T)})},Z=>{console.log(Z)})},d=>{console.log(d)}),this.casoService.createCaso({CIteacher:o,CIstudent:i,nameInstitution:r}).subscribe(d=>{const{message:C}=d;console.log(C),this.router.navigate(["../listar"],{relativeTo:this.route})},d=>{console.log(d)})}else this.casoService.createCaso({CIteacher:this.formCaso.form.value.selectTeacher,CIstudent:i,nameInstitution:r}).subscribe(s=>{const{message:v}=s;console.log(v)},s=>{console.log(s)})}getInstitutions(){this.institucionService.getAllInstitution().subscribe(i=>{const{message:o,institutions:r}=i;this.institutions=r,console.log(this.institutions),console.log(o)})}getTeachers(){this.teacherService.getAllTeacher().subscribe(i=>{const{message:o,listaTeacher:r}=i;this.teachers=r,console.log(this.teachers),console.log(o)})}agregarDocente(){this.agregar=!0}}x.\u0275fac=function(i){return new(i||x)(e.Y36(Y.H),e.Y36(Q.J),e.Y36(R.K),e.Y36(O.V),e.Y36(E.b),e.Y36(P.z),e.Y36(u.F0),e.Y36(u.gz))},x.\u0275cmp=e.Xpm({type:x,selectors:[["app-registrar"]],decls:88,vars:10,consts:[[1,"contenedor"],[1,"body"],[1,"tittle"],[3,"formGroup","ngSubmit"],[1,"subtitulo"],[1,"form-group"],[1,"labels"],["for","ciStudent"],[1,"inputs"],["type","text","id","ciStudent","formControlName","ciStudent","placeholder","Ingrese el numero de c\xe9dula estudiante",1,"form-control"],["for","nameStudent"],["type","text","id","nameStudent","formControlName","nameStudent","placeholder","Ingrese el nombre del estudiante",1,"form-control"],["for","lastNameStudent"],["type","text","id","lastNameStudent","formControlName","lastNameStudent","placeholder","Ingrese el apellido del estudiante",1,"form-control"],["for","ageStudent"],["type","text","id","ageStudent","formControlName","ageStudent","placeholder","Ingrese la edad del estudiante",1,"form-control"],["for","addressStudent"],["type","text","id","addressStudent","formControlName","addressStudent","placeholder","Ingrese la direcci\xf3n del estudiante",1,"form-control"],["for","phoneStudent"],["type","text","id","phoneStudent","formControlName","phoneStudent","placeholder","Ingrese el tel\xe9fono del estudiante",1,"form-control"],["for","emailStudent"],["type","email","id","emailStudent","formControlName","emailStudent","placeholder","Ingrese el correo electr\xf3nico del estudiante",1,"form-control"],["for","gradeStudent"],["type","text","id","gradeStudent","formControlName","gradeStudent","placeholder","Ingrese el grado del estudiante",1,"form-control"],["for","parallelStudent"],["type","text","id","parallelStudent","formControlName","parallelStudent","placeholder","Ingrese el grado del estudiante",1,"form-control"],["class","form-group",4,"ngIf"],["for","institucion"],["id","institucion","formControlName","institucion",1,"form-control"],["value","0"],[3,"value",4,"ngFor","ngForOf"],[1,"buttons"],["type","submit",1,"btnEnviar"],["for","selectTeacher"],["id","selectTeacher","formControlName","selectTeacher",1,"form-control"],[1,"agregar"],["type","button",1,"btnAgregar",3,"click"],[3,"value"],["for","CISTeacher"],["type","text","id","CISTeacher","formControlName","CISTeacher","placeholder","Ingrese el CI del profesor",1,"form-control"],["for","nameTeacher"],["type","text","id","nameTeacher","formControlName","nameTeacher","placeholder","Ingrese el nombre del profesor",1,"form-control"],["for","lastNameTeacher"],["type","text","id","lastNameTeacher","formControlName","lastNameTeacher","placeholder","Ingrese el nombre del profesor",1,"form-control"],["for","addressTeacher"],["type","text","id","addressTeacher","formControlName","addressTeacher","placeholder","Ingrese la direcci\xf3n del profesor",1,"form-control"],["for","phoneTeacher"],["type","text","id","phoneTeacher","formControlName","phoneTeacher","placeholder","Ingrese el tel\xe9fono del profesor",1,"form-control"],["for","emailTeacher"],["type","email","id","emailTeacher","formControlName","emailTeacher","placeholder","Ingrese el correo electr\xf3nico del profesor",1,"form-control"],["for","passwordTeacher"],["type","password","id","passwordTeacher","formControlName","passwordTeacher","placeholder","Ingrese la contrase\xf1a del profesor",1,"form-control"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),e._uU(4,"Registrar Caso"),e.qZA()(),e.TgZ(5,"form",3),e.NdJ("ngSubmit",function(){return o.create()}),e.TgZ(6,"fieldset")(7,"div",4),e._uU(8,"Datos del estudiante"),e.qZA(),e.TgZ(9,"div",5)(10,"div",6)(11,"label",7),e._uU(12,"Ingrese la c\xe9dula del estudiante:"),e.qZA()(),e.TgZ(13,"div",8),e._UZ(14,"input",9),e.qZA()(),e.TgZ(15,"div",5)(16,"div",6)(17,"label",10),e._uU(18,"Ingrese el nombre del estudiante:"),e.qZA()(),e.TgZ(19,"div",8),e._UZ(20,"input",11),e.qZA()(),e.TgZ(21,"div",5)(22,"div",6)(23,"label",12),e._uU(24,"Ingrese el apellido del estudiante:"),e.qZA()(),e.TgZ(25,"div",8),e._UZ(26,"input",13),e.qZA()(),e.TgZ(27,"div",5)(28,"div",6)(29,"label",14),e._uU(30,"Ingrese la edad del estudiante:"),e.qZA()(),e.TgZ(31,"div",8),e._UZ(32,"input",15),e.qZA()(),e.TgZ(33,"div",5)(34,"div",6)(35,"label",16),e._uU(36,"Ingrese la direcci\xf3n del estudiante:"),e.qZA()(),e.TgZ(37,"div",8),e._UZ(38,"input",17),e.qZA()(),e.TgZ(39,"div",5)(40,"div",6)(41,"label",18),e._uU(42,"Ingrese el tel\xe9fono del estudiante:"),e.qZA()(),e.TgZ(43,"div",8),e._UZ(44,"input",19),e.qZA()(),e.TgZ(45,"div",5)(46,"div",6)(47,"label",20),e._uU(48,"Ingrese el correo electr\xf3nico del estudiante:"),e.qZA()(),e.TgZ(49,"div",8),e._UZ(50,"input",21),e.qZA()(),e.TgZ(51,"div",5)(52,"div",6)(53,"label",22),e._uU(54,"Ingrese el grado del estudiante:"),e.qZA()(),e.TgZ(55,"div",8),e._UZ(56,"input",23),e.qZA()(),e.TgZ(57,"div",5)(58,"div",6)(59,"label",24),e._uU(60,"Ingrese el paralelo del estudiante:"),e.qZA()(),e.TgZ(61,"div",8),e._UZ(62,"input",25),e.qZA()(),e.TgZ(63,"div",4),e._uU(64,"Datos del docente"),e.qZA(),e.YNc(65,H,12,1,"div",26),e.YNc(66,G,6,0,"div",26),e.YNc(67,B,6,0,"div",26),e.YNc(68,$,6,0,"div",26),e.YNc(69,K,6,0,"div",26),e.YNc(70,X,6,0,"div",26),e.YNc(71,V,6,0,"div",26),e.YNc(72,W,6,0,"div",26),e.TgZ(73,"div",4),e._uU(74,"Datos de la instituci\xf3n"),e.qZA(),e.TgZ(75,"div",5)(76,"div",6)(77,"label",27),e._uU(78,"Seleccione la instituci\xf3n:"),e.qZA()(),e.TgZ(79,"div",8)(80,"select",28)(81,"option",29),e._uU(82,"Seleccione la instituci\xf3n"),e.qZA(),e.YNc(83,ee,2,2,"option",30),e.qZA()()(),e.TgZ(84,"div",5)(85,"div",31)(86,"button",32),e._uU(87,"Registrar"),e.qZA()()()()()()()),2&i&&(e.xp6(5),e.Q6J("formGroup",o.formCaso.form),e.xp6(60),e.Q6J("ngIf",!o.agregar),e.xp6(1),e.Q6J("ngIf",o.agregar),e.xp6(1),e.Q6J("ngIf",o.agregar),e.xp6(1),e.Q6J("ngIf",o.agregar),e.xp6(1),e.Q6J("ngIf",o.agregar),e.xp6(1),e.Q6J("ngIf",o.agregar),e.xp6(1),e.Q6J("ngIf",o.agregar),e.xp6(1),e.Q6J("ngIf",o.agregar),e.xp6(11),e.Q6J("ngForOf",o.institutions))},dependencies:[g.sg,g.O5,t._Y,t.YN,t.Kr,t.Fj,t.EJ,t.JJ,t.JL,t.sg,t.u],styles:["[_ngcontent-%COMP%]:root{--cameo: #D8B393;--nile-blue: #1A3A4D;--camelot: #892F50;--paarl: #AD642E}*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{margin:0;font-family:Roboto,Helvetica Neue,sans-serif}select.ng-valid.ng-touched[_ngcontent-%COMP%], textarea.ng-valid.ng-touched[_ngcontent-%COMP%], input.ng-valid.ng-touched[_ngcontent-%COMP%]{border:2px solid green!important}select.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%], input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:2px solid red!important}button[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}[_nghost-%COMP%]{display:flex;width:100%;height:100%;flex-direction:column;align-items:center}.contenedor[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column}.body[_ngcontent-%COMP%]{width:97%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;border:4px solid var(--paarl);border-radius:10px;margin:0 10px;overflow-y:auto;overflow-x:hidden}.body[_ngcontent-%COMP%]::-webkit-scrollbar{width:15px;background-color:#1a3a4d;border-radius:10px}.body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#892f50;border-radius:10px}.material-icons[_ngcontent-%COMP%]{margin:0;padding:0;font-size:30px}.tittle[_ngcontent-%COMP%]{width:100%;height:10%;display:flex;flex-direction:row;justify-content:center;align-items:center;color:var(--camelot);font-size:36px;line-height:normal;font-weight:600;margin-bottom:10px}.description[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;color:var(--nile-blue);font-size:16px;line-height:normal;font-weight:600}.description[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;color:var(--nile-blue);font-size:16px;line-height:normal;font-weight:400;margin:0 0 0 20px}.btnAccion[_ngcontent-%COMP%]{width:100px;height:40px;display:flex;align-items:center;justify-content:center;background-color:var(--cameo);color:var(--nile-blue);font-size:20px;font-weight:600;padding:10px;border:2px solid var(--camelot);border-radius:10px;cursor:pointer;margin:5px}.btnRegistrar[_ngcontent-%COMP%]{width:100px;height:40px;display:flex;align-items:center;justify-content:center;background-color:var(--cameo);color:var(--nile-blue);font-size:20px;font-weight:600;padding:10px;border:2px solid var(--camelot);border-radius:10px;cursor:pointer}.btnRegistrar[_ngcontent-%COMP%]:hover{background-color:var(--camelot);color:var(--cameo)}form[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:10px}.subtitulo[_ngcontent-%COMP%]{width:100%;height:10%;display:flex;flex-direction:row;justify-content:center;align-items:center;color:var(--camelot);font-size:20px;line-height:normal;border:2px solid var(--camelot);border-radius:10px;font-weight:600;margin:5px 0}.form-group[_ngcontent-%COMP%]{width:100%;color:var(--color-secundario);display:flex;justify-content:left;align-items:flex-start;margin:10px;flex-direction:row}.form-group[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]{width:30%;display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column}.form-group[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px;line-height:normal;font-weight:400;padding-left:10px;color:var(--camelot)}.form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]{width:70%;display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column}.form-group[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:flex-end;flex-direction:column}.form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:70%;color:var(--color-primario);text-align:center;border-radius:5px;border:2px solid var(--camelot)}.form-group[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{width:20px;height:20px;color:var(--color-primario);text-align:center;border-radius:5px}.boton-agregar[_ngcontent-%COMP%]{background-color:#ee4326;color:#fff;padding:8px 12px;border-radius:4px;font-size:14px;text-align:center;transition:background-color .3s ease;text-decoration:none}.btnEnviar[_ngcontent-%COMP%], .btnEliminar[_ngcontent-%COMP%], .btnAgregar[_ngcontent-%COMP%]{width:100px;height:40px;display:flex;align-items:center;justify-content:center;background-color:var(--cameo);color:var(--nile-blue);font-size:20px;font-weight:600;margin:10px;border:2px solid var(--camelot);border-radius:10px;cursor:pointer}.modal[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;position:fixed;top:0;left:0;background-color:#00000080;z-index:100}.modalContainer[_ngcontent-%COMP%]{width:50%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:var(--cameo);border-radius:10px;padding:10px}.labelsModal[_ngcontent-%COMP%]{width:100%;height:90%;display:flex;flex-direction:row;justify-content:center;align-items:center;color:var(--camelot);font-size:20px;line-height:normal;border:2px solid var(--camelot);border-radius:10px;font-weight:600;margin:5px}.inputsModal[_ngcontent-%COMP%]{width:100%;height:90%;display:flex;flex-direction:row;justify-content:center;align-items:center;color:var(--camelot);font-size:20px;line-height:normal;border:2px solid var(--camelot);border-radius:10px;font-weight:600;margin:5px 0}"]});const te=[{path:"",component:p,pathMatch:"full"},{path:"listar",component:p},{path:"registrar",component:x}];class m{}m.\u0275fac=function(i){return new(i||m)},m.\u0275mod=e.oAB({type:m}),m.\u0275inj=e.cJS({imports:[u.Bz.forChild(te),u.Bz]});class f{}f.\u0275fac=function(i){return new(i||f)},f.\u0275mod=e.oAB({type:f}),f.\u0275inj=e.cJS({imports:[g.ez,m,t.UX]})}}]);