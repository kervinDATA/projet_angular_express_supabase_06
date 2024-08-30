import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    id: '',
    username: '',
    email: '',
    password: '',
    role: ''  // Ajout du champ role
  };

  message : string = '';
  isSuccess: boolean = false; // Pour déterminer le type de message

  constructor(private signupService: SignupService, private router: Router) {}

  onSubmit(): void {
    this.signupService.register(this.user).subscribe(
      response => {
        console.log('Inscription réussie:', response);
        this.message = 'Inscription réussie ! Vous pouvez maintenant vous connecter.';
        setTimeout(() => this.router.navigate(['/login']), 3000); // Rediriger vers la page de connexion après inscription
      },
      error => {
        console.error('Erreur d\'inscription:', error);
      }
    );
  }
}
