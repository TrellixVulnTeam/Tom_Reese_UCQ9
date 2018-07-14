using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace the_wall.Models{
    public class User
    {
        [Key]
        public int Id {get;set;}

        [Required]
        [MinLength(2)]
        [RegularExpression("^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        public string First_Name { get; set; }
        
        [Required]
        [MinLength(2)]
        [RegularExpression("^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        public string Last_Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        public DateTime Created_At {get; set;} = DateTime.Now;
        public DateTime Updated_At {get; set;} = DateTime.Now;


        public List<Message> Messages {get; set;}
       
        [Required]
        [DataType(DataType.Password)]
        [MinLength(8)]
        public string Password { get; set; }

        [NotMapped]
        [CompareAttribute("Password")]
        public string ConfirmPassword { get; set; }

        public User()
        {
            Created_At = DateTime.Now;
            Messages = new List<Message>();
        }
    }
}