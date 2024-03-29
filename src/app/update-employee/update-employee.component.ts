import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  id: number;

  constructor(private service: EmployeeService, private route: ActivatedRoute
    , private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; //retrieve id from the route
    this.service.getEmployeeById(this.id).subscribe(data => { this.employee = data; });
  }
  onSubmit() {
    this.service.updateEmployee(this.id, this.employee).subscribe(data => {

      console.log(data);

    });
    this.router.navigate(['']);
  }


}
