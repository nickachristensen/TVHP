class ArtSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :category
end
