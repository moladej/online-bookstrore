package in.moladej.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.moladej.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book,Long>{

}
