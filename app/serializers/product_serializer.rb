class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :price, :description
end
