3 tables:
Users: string, Boolean (gen)
Posts: string, number
Friends: num


Let's make a Mini FaceBook app! Before we start building the database, however, we need to come up with a schema--or an outline for how it should look. Our database should contain at least 3 tables: users, posts, and friends. The users table should contain personal data pertaining to a particular user, such as first & last name, date of birth, password, a short bio, etc. The posts table (we'll just do text-only posts for now) should store a string of text, a date posted, and the number of likes. The friends table tracks data pertaining to an individual "friendship"--this means it should store the user ID of the "requestor" and "requested", a date requested, a status (whether it has been accepted/declined/requested), and anything else you want associated with a friendship.

The task: Under Design.md, explain and outline how your relational database will work. List the tables, their associated columns, and the data type that will be stored in each column (string, number, boolean, enum, date, etc.). Feel free to add onto what is given above. It might be helpful to get some paper to draw tables and arrows representing connections between data.
