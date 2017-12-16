from database import db, ProductArea, Client

prodArea1 = ProductArea(name="Policies")
prodArea2 = ProductArea(name="Billing")
prodArea3 = ProductArea(name="Claims")
prodArea4 = ProductArea(name="Reports")

client1 = Client(name="Aperture Science")
client2 = Client(name="Weyland-Yutani Corporation")
client3 = Client(name="Intertrode")
client4 = Client(name="Vandelay Industries")
client5 = Client(name="Megadodo Publications")
client6 = Client(name="Initech")
client7 = Client(name="Black Mesa Research Facility")

db.session.add(prodArea1)
db.session.add(prodArea2)
db.session.add(prodArea3)
db.session.add(prodArea4)
db.session.add(client1)
db.session.add(client2)
db.session.add(client3)
db.session.add(client4)
db.session.add(client5)
db.session.add(client6)
db.session.add(client7)

db.session.commit()

ProductArea.query.all()
Client.query.all()