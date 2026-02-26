from flask import Flask
from flask_restx import Api
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from app.routes.auth import auth_bp
from app.routes.predict import predict_ns
from app.models.user_model import db

def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

    # Database Configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///harvestiq.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['JWT_SECRET_KEY'] = 'super-secret-key-for-hackathon'

    db.init_app(app)
    JWTManager(app)

    # Register Blueprint
    app.register_blueprint(auth_bp, url_prefix='/auth')

    api = Api(
        app,
        title="HarvestIQ API - Nagpur Region",
        version="1.0",
        description="AI-based Smart Agricultural Decision Engine (Secured)",
        doc="/docs"
    )

    api.add_namespace(predict_ns)

    @app.route("/")
    def home():
        return "HarvestIQ Backend is Running 🚀"

    with app.app_context():
        db.create_all()

    return app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True, port=5000, host="0.0.0.0")