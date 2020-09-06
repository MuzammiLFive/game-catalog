import { Component, OnInit } from '@angular/core';
import { GamesService } from '../shared/games.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor(private gamesService: GamesService) {}

  gamesList = null;
  games = null;
  ngOnInit(): void {
    this.gamesService.all().subscribe((list) => (this.gamesList = list));
  }

  selectedGenre(genre) {
    this.games = genre.games;
  }

  Unset() {
    this.games = null;
  }
}
